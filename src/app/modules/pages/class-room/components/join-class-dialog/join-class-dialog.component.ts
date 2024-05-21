import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


export interface DialogData {
  classCode: string;
}


@Component({
  selector: 'app-join-class-dialog',
  templateUrl: './join-class-dialog.component.html',
  styleUrls: ['./join-class-dialog.component.scss']
})
export class JoinClassDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<JoinClassDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
