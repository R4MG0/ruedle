import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileOverviewComponent } from './pages/profile-overview/profile-overview.component';
import { ClassRoomModule } from '../class-room/class-room.module';


@NgModule({
  declarations: [
    ProfileOverviewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ClassRoomModule
  ]
})
export class ProfileModule { }
