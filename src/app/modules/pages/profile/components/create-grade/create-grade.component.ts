import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateGrade } from 'src/app/shared/interfaces/create-grade';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.component.html',
  styleUrls: ['./create-grade.component.scss']
})
export class CreateGradeComponent {
constructor(
    public dialogRef: MatDialogRef<CreateGradeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateGrade,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
