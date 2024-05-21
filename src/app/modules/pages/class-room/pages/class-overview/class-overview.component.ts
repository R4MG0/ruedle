import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JoinClassDialogComponent } from '../../components/join-class-dialog/join-class-dialog.component';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.scss']
})
export class ClassOverviewComponent {
  animal!: string;
  classCode!: string;

  constructor(public dialog: MatDialog, private readonly moduleService: ModulesOverviewService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(JoinClassDialogComponent, {
      data: {classCode: this.classCode},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.classCode = result;
      this.moduleService.joinClass(this.classCode).subscribe();
    });
  }
}
