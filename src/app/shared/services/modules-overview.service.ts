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
    const header = {
        headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)
    }
    return this.http.post<ClassModule[]>(`http://localhost:8080/module/get`, header);
  }

  getClasses():Observable<ClassModule[]> {
    // const headers = { 'Authorization': 'Bearer my-token' }
    return this.http.post<ClassModule[]>(`http://localhost:8080/school_class/get`,{});
  }
  getModuleById(moduleId: string):Observable<ClassModule> {
    const body = {id: moduleId};
    return this.http.post<ClassModule>(`http://localhost:8080/module/get`, body);
  }
}
