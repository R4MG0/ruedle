import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateGrade } from 'src/app/shared/interfaces/create-grade';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

export interface DropdownData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.scss']
})
export class CreateGradeComponent {
  modules: DropdownData[] = [];
constructor(
    public dialogRef: MatDialogRef<CreateGradeComponent>,
    readonly moduleService: ModulesOverviewService,
    @Inject(MAT_DIALOG_DATA) public data: CreateGrade,
  ) {
    console.log('data', data);
    this.moduleService.getAllModules().subscribe((modules: any) => {
      for (const module of modules) {
        this.modules.push({id: module.id, name: module.name})
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
