import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreatePostItData } from '../interfaces/create-post-it-data';
import { PostItData } from '../interfaces/post-it-data';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private readonly http: HttpClient,private readonly authService: AuthService) { }


   getNotes():Observable<any> {
    return this.http.post<any>(`http://localhost:8080/note/get`, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }

  cerateNote(data: CreatePostItData):Observable<PostItData[]> {
    return this.http.post<PostItData[]>(`http://localhost:8080/note`, data, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }


}
