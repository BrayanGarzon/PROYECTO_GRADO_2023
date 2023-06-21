import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/interfaces/discover/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  saveComment(comment: Comment): Observable<any> {
    var token = localStorage.getItem('token');
    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      })
    }
    return this.http.post<any>(`${API_URL}/register/comments/`, comment, httpHeader);
  }

  getCommentsBySite(siteId: string){
    return this.http.get<any>(`${API_URL}/register/comments/${siteId}/list/`);
  }

}
