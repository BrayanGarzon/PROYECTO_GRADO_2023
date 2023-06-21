import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { Email } from 'src/app/interfaces/discover/email.interface';

@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private http: HttpClient) { }

  sendMail(email: Email): Observable<any> {
    return this.http.post<any>(`${API_URL}/register/send/mail/`, email);
  }
}
