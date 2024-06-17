import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Grade } from 'src/app/shared/interfaces/grade';
import { GradeService } from 'src/app/shared/services/grade.service';
import { CreateGradeComponent } from '../create-grade/create-grade.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateGrade } from 'src/app/shared/interfaces/create-grade';

@Component({
  selector: 'app-grade-table',
  templateUrl: './grade-table.component.html',
  styleUrls: ['./grade-table.component.scss']
})
export class GradeTableComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = ['grade', 'weight', 'testDate', 'forModule', 'semester', 'edit'];
  dataSource!: MatTableDataSource<Grade>;
  newGrade!: CreateGrade;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private readonly gradeService: GradeService, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.gradeService.getGradeTableData().subscribe((grades: any) => {
      console.log('grades', grades)
    })
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
    const dialogRef = this.dialog.open(CreateGradeComponent, {
      data: {...this.newGrade},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      const event: CreateGrade = {...result};
      this.gradeService.createGradeForModule(event).subscribe((event) => {
        console.log('event', event);
      });
    })
  }
  editEvent(event: Grade){
    console.log('edit event', event);
    // const dialogRef = this.dialog.open(CreateEventDialogComponent, {
    //   data: {...event},
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('result', result)
    //   this.eventTableService.updateEventForModule(result).subscribe((event:any) => {
    //     console.log('event', event);
    //   });
    // })
  }
}
