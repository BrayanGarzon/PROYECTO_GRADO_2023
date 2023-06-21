import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/discover/comment.interface';
import { CommentsService } from 'src/app/services/discover/comments.service';
import { SitesService } from 'src/app/services/discover/sites.service';

@Component({
  selector: 'app-showcomments',
  templateUrl: './showcomments.component.html',
  styleUrls: ['./showcomments.component.css']
})
export class ShowcommentsComponent {
  private siteId: string | null;
  site: any;
  comments: Comment[] =[];

  constructor(private sitesService: SitesService, private commentsService: CommentsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.siteId = activatedRoute.snapshot.paramMap.get('site_id');
    this.getSite(this.siteId!)
    this.getCommentsBySite(this.siteId!)
  }

  getSite(siteId: string) {
    this.sitesService.getSiteById(siteId).subscribe(response => {
      this.site = response;
    })
  }

  getCommentsBySite(siteId: string) {
    this.commentsService.getCommentsBySite(siteId).subscribe((response: Comment[]) => {
      this.comments = response;
      console.log(this.comments);
      
    })
  }
}
