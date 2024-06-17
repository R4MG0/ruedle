import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../interfaces/grade';
import { AuthService } from 'src/app/core/service/auth.service';
import { Observable } from 'rxjs';
import { CreateGrade } from '../interfaces/create-grade';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(private readonly http: HttpClient, private readonly authService: AuthService) { }

  getGradeTableData(){
    return this.http.post<Grade[]>(`http://localhost:8080/grade/get`, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }

  createGradeForModule(event: CreateGrade): Observable<Grade>{
    return this.http.post<Grade>(`http://localhost:8080/grade`, event, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  updateGradeForModule(event: Grade): Observable<Grade>{
    return this.http.put<Grade>(`http://localhost:8080/grade?id=${event.id}`, event, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  deleteGrade(gradeId: number):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/grade?id=${gradeId}`, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
}
