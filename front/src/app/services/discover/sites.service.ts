import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { Site } from 'src/app/interfaces/discover/site.interface';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(private http: HttpClient) { }

  getSitesByCategory(categoryId: string): Observable<Site[]> {
    return this.http.get<Site[]>(`${API_URL}/location/sites/${categoryId}/list/`);
  }

  getSiteById(siteId: string) {
    return this.http.get<Site[]>(`${API_URL}/location/sites/${siteId}/`);
  }

  getSites(query: string) {
    return this.http.get<Site[]>(`${API_URL}/location/sites/?name=${query}`);
  }
}
