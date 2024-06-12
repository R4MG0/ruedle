import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClassModule } from 'src/app/shared/interfaces/class-module';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';
import { CreateClassDialogComponent } from '../../components/create-class-dialog/create-class-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules-overview',
  templateUrl: './modules-overview.component.html',
  styleUrls: ['./modules-overview.component.scss']
})
export class ModulesOverviewComponent implements OnInit {
  module: {name: string, description: string, schoolClassId: number} = {name: '', description: '', schoolClassId: 0};
  constructor(public dialog: MatDialog, private readonly moduleService: ModulesOverviewService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      const classId = this.route.snapshot.paramMap.get('classId');
      this.module = {name: '', description: '', schoolClassId: parseInt(classId!)};
      console.log('module', this.module)
  }
  openCreateClassDialog(): void {
    const dialogRef = this.dialog.open(CreateClassDialogComponent, {
      data: this.module,
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.moduleService.createModule(this.module).subscribe( res => {
        console.log(res);
      });

    });
  }
}
