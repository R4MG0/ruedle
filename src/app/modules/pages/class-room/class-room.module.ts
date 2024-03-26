import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoomRoutingModule } from './class-room-routing.module';
import { ModulesOverviewComponent } from './pages/modules-overview/modules-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OverviewModuleComponent } from './pages/overview-module/overview-module.component';


@NgModule({
  declarations: [
    ModulesOverviewComponent,
    SideNavigationComponent,
    OverviewComponent,
    OverviewModuleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    ClassRoomRoutingModule
  ]
})
export class ClassRoomModule { }
