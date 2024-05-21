import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  title: string;
  description: string;
}


@Component({
  selector: 'app-edit-module-dialog',
  templateUrl: './edit-module-dialog.component.html',
  styleUrls: ['./edit-module-dialog.component.scss']
})
export class EditModuleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditModuleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
