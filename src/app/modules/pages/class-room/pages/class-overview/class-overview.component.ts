import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinClassDialogComponent } from '../../components/join-class-dialog/join-class-dialog.component';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';
import { CreateClassDialogComponent } from '../../components/create-class-dialog/create-class-dialog.component';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.scss']
})
export class ClassOverviewComponent {
  classCode!: string;
  class: {name: string, description: string} = {name: '', description: ''};
  classes!: any[];

  constructor(public dialog: MatDialog, private readonly moduleService: ModulesOverviewService) {}

  openJoinClassDialog(): void {
    const dialogRef = this.dialog.open(JoinClassDialogComponent, {
      data: {classCode: this.classCode},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.classCode = result;
      this.moduleService.joinClass(this.classCode).subscribe( res => {
        console.log(res);
        window.location.reload();
      });

    });
  }
  openCreateClassDialog(): void {
    const dialogRef = this.dialog.open(CreateClassDialogComponent, {
      data: this.class,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.classCode = result;
      this.moduleService.cerateClass(this.class).subscribe( res => {
        console.log(res);
        window.location.reload();
      });

    });
  }
}
