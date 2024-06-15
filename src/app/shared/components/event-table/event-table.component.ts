import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventData } from '../../interfaces/event-data';
import { EventTableService } from '../../services/event-table.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEventData, CreateEventDialogComponent } from '../create-event-dialog/create-event-dialog.component';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.scss']
})
export class EventTableComponent {
displayedColumns: string[] = ['title', 'description', 'takesPlaceAt', 'duration', 'createdBy', 'edit'];
  dataSource!: MatTableDataSource<EventData>;
  newEvent!: CreateEventData;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() moduleId!:number | null;
  @Input() showTitle: boolean = true;

  constructor(private readonly eventTableService: EventTableService, private readonly dialog: MatDialog) {
    // Create 100 users
    if(this.moduleId){
      this.eventTableService.getEventTableDataByModuleId(this.moduleId).subscribe((events) => {
        console.log(events);
      });
    }
    this.eventTableService.getEventTableData().subscribe((events) => {
      console.log(events);
      this.dataSource = new MatTableDataSource(events);
    })
    // Assign the data to the data source for the table to render
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  createEvent(){
    console.log('create event');
    const dialogRef = this.dialog.open(CreateEventDialogComponent, {
      data: {...this.newEvent},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
    })
  }
  editEvent(event: EventData){
    console.log('edit event', event);
  }
}


/** Builds and returns a new User. */
// function get(id: number): EventData {
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }
