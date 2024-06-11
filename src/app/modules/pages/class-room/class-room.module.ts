import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoomRoutingModule } from './class-room-routing.module';
import { ModulesOverviewComponent } from './pages/modules-overview/modules-overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OverviewModuleComponent } from './pages/overview-module/overview-module.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { CreatePostItDialogComponent } from './components/create-post-it-dialog/create-post-it-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotePageComponent } from './components/note-page/note-page.component';
import { ClassOverviewComponent } from './pages/class-overview/class-overview.component';
import { JoinClassDialogComponent } from './components/join-class-dialog/join-class-dialog.component';
import { CreateClassDialogComponent } from './components/create-class-dialog/create-class-dialog.component';


@NgModule({
  declarations: [
    ModulesOverviewComponent,
    SideNavigationComponent,
    OverviewComponent,
    OverviewModuleComponent,
    CreatePostItDialogComponent,
    NotePageComponent,
    ClassOverviewComponent,
    JoinClassDialogComponent,
    CreateClassDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    ClassRoomRoutingModule,
    MatTabsModule
  ],
  exports: [
    NotePageComponent
  ]
})
export class ClassRoomModule { }
