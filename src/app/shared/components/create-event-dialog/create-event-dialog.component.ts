import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../edit-module-dialog/edit-module-dialog.component';
import { EventData } from '../../interfaces/event-data';

export interface CreateEventData {
  title: string;
  description: string;
  takesPlaceAt: string;
  durationHours: number;
  schoolModuleId: number;
}

@Component({
  selector: 'app-create-event-dialog',
  templateUrl: './create-event-dialog.component.html',
  styleUrls: ['./create-event-dialog.component.scss']
})
export class CreateEventDialogComponent {
constructor(
    public dialogRef: MatDialogRef<CreateEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateEventData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
