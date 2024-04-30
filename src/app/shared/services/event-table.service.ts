import { Injectable } from '@angular/core';
import { EventData } from '../interfaces/event-data';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventTableService {

  constructor(private readonly http: HttpClient) { }


  getEventTableData(){
    const events :EventData[] = [
      {name: 'Presentation', subject: 'English 1', date: '2024-02-27'},
      {name: 'Cybersecurity', subject: 'Informati 2', date: '2024-09-01'},
      {name: 'Algebra', subject: 'meth 3', date: '2024-10-01'},
      {name: 'oarstioenars', subject: 'ariesotn 4`', date: '2024-12-01'},
      {name: 'oirenstoiarsen', subject: 'oiiarestnkk1', date: '2024-09-01'},
      {name: 'iarsteinarosi', subject: 'arositn 1', date: '2024-08-01'},
      {name: 'qeairst', subject: 'zarsoitne', date: '2024-07-01'},
      {name: 'ariaorstnears', subject: 'arsoitnao', date: '2024-06-01'},
      {name: 'xxxxxx', subject: 'xxxxxxxxx', date: '2024-05-01'},
      {name: 'zzzzzz', subject: 'oiearsnt', date: '2024-04-01'},
      {name: 'yyyyyy', subject: 'arstoien 1', date: '2024-08-01'},
      {name: 'earstioen', subject: 'eiaorsnet1', date: '2024-03-01'},]

    return events;
  }
  getEventTableDataByModuleId(moduleId: number){
    return of(this.getEventTableData());
    // return this.http.get(`http://localhost:3000/events?moduleId=${moduleId}`);
  }
}
