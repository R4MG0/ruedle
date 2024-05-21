import { Injectable } from '@angular/core';
import { ClassModule } from '../interfaces/class-module';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ModulesOverviewService {

  constructor(private readonly http: HttpClient, private readonly authService: AuthService) { }

  getModules():Observable<ClassModule[]> {

    return this.http.post<ClassModule[]>(`http://localhost:8080/module/get`, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }

  getClasses():Observable<ClassModule[]> {
    // const headers = { 'Authorization': 'Bearer my-token' }
    // return this.http.post<ClassModule[]>(``, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`).set('Content-Type', 'application/json').set('Accept', 'application/json').set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS').set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With').set('Access-Control-Allow-Credentials', 'true')});
    return this.http.post<any>(`http://localhost:8080/school_class/get`, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  getModuleById(moduleId: string):Observable<ClassModule> {
    const body = {id: moduleId};
    return this.http.post<ClassModule>(`http://localhost:8080/module/get`, body);
  }

  joinClass(classCode: string):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/school_class/join`, {code: classCode}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }

  deleteModule(moduleId: number):Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/module/${moduleId}`, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  editModule(moduleId: number, data: any):Observable<any> {
    return this.http.put<any>(`http://localhost:8080/module/${moduleId}`, data, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
}
