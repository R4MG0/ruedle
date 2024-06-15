import { Injectable } from '@angular/core';
import { EventData } from '../interfaces/event-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/core/service/auth.service';
import { CreateEventData } from '../components/create-event-dialog/create-event-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class EventTableService {

  constructor(private readonly http: HttpClient, private readonly authService: AuthService) { }


  getEventTableData(){
    return this.http.post<EventData[]>(`http://localhost:8080/event/get`, {}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  getEventTableDataByModuleId(moduleId: number): Observable<EventData[]>{
    return this.http.post<EventData[]>(`http://localhost:8080/event/get`, {moduleId: moduleId}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
    // return of(this.getEventTableData());
    // return this.http.get(`http://localhost:3000/events?moduleId=${moduleId}`);
  }
  createEventForModule(event: CreateEventData): Observable<EventData>{
    return this.http.post<EventData>(`http://localhost:8080/event`, {event}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
}
