import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from 'src/app/interfaces/discover/site.interface';
import { SitesService } from 'src/app/services/discover/sites.service';

@Component({
  selector: 'app-showsites',
  templateUrl: './showsites.component.html',
  styleUrls: ['./showsites.component.css']
})
export class ShowsitesComponent {

  sites!: Site[];
  filtro: string = '';

  constructor(private activatedRoute: ActivatedRoute, private sitesService: SitesService) {
    this.getSites();
  }

  getSites(){
    this.sitesService.getSites(this.filtro).subscribe(sites => {
      this.sites = sites;
    })
  }

  filter() {
    this.getSites();
  }

}
