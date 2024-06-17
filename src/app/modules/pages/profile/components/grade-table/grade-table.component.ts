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
  newGrade: CreateGrade = {grade:1, weight: 0, testDate: '', forModuleId: 0, semester: 0};
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
      this.formatDate(result.testDate);
      const event: CreateGrade = {grade: result.grade, weight: result.weight, testDate: this.formatDate(result.testDate), forModuleId: result.forModuleId, semester: result.semester};
      this.gradeService.createGradeForModule(event).subscribe((event) => {
        console.log('event', event);
        this.ngOnInit();
      });
    })
  }
  editEvent(event: Grade){
    console.log('edit event', event);
    const dialogRef = this.dialog.open(CreateGradeComponent, {
      data: {...event},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      this.gradeService.updateGradeForModule(result).subscribe((event:any) => {
        console.log('event', event);
      });
    })
  }
  deleteEvent(event: Grade){
    console.log('delete event', event);
    this.gradeService.deleteGrade(event.id).subscribe((event) => {
      console.log('event', event);
      this.ngOnInit();
    });
  }
  formatDate(date: Date): string{
    // Extract day, month, and year from the date
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Pad day and month with leading zeros if necessary
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;

    // Construct the formatted date string
    const formattedDate = `${formattedDay}.${formattedMonth}.${year} 00:00`;

    console.log('formattedDate', formattedDate);
    return formattedDate;
  }
}
