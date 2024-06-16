import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileOverviewComponent } from './pages/profile-overview/profile-overview.component';
import { ClassRoomModule } from '../class-room/class-room.module';
import { MatButtonModule } from '@angular/material/button';
import { GradeTableComponent } from './components/grade-table/grade-table.component';


@NgModule({
  declarations: [
    ProfileOverviewComponent,
    GradeTableComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ClassRoomModule,
    MatButtonModule
  ]
})
export class ProfileModule { }
