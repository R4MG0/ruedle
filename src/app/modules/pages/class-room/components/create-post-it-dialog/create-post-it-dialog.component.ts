import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreatePostItData } from 'src/app/shared/interfaces/create-post-it-data';
import { PostItData } from 'src/app/shared/interfaces/post-it-data';

@Component({
  selector: 'app-create-post-it-dialog',
  templateUrl: './create-post-it-dialog.component.html',
  styleUrls: ['./create-post-it-dialog.component.scss']
})
export class CreatePostItDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreatePostItDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreatePostItData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
