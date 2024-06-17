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
    return this.http.post<EventData[]>(`http://localhost:8080/event/get`, {schoolModule: {id:moduleId}}, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
    // return of(this.getEventTableData());
    // return this.http.get(`http://localhost:3000/events?moduleId=${moduleId}`);
  }
  createEventForModule(event: CreateEventData): Observable<EventData>{
    return this.http.post<EventData>(`http://localhost:8080/event`, event, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
  updateEventForModule(event: EventData): Observable<EventData>{
    return this.http.put<EventData>(`http://localhost:8080/event?id=${event.id}`, event, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }

  deleteEvent(id: number): Observable<any>{
    return this.http.delete(`http://localhost:8080/event?id=${id}`, {headers: new HttpHeaders().set('Authorization',  `${this.authService.getToken()}`)});
  }
}
