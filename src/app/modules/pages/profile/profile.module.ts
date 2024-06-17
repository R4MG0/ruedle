import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileOverviewComponent } from './pages/profile-overview/profile-overview.component';
import { ClassRoomModule } from '../class-room/class-room.module';
import { MatButtonModule } from '@angular/material/button';
import { GradeTableComponent } from './components/grade-table/grade-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateGradeComponent } from './components/create-grade/create-grade.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ProfileOverviewComponent,
    GradeTableComponent,
    CreateGradeComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ClassRoomModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    GradeTableComponent
  ]
})
export class ProfileModule { }
