import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventTableComponent } from './components/event-table/event-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { SideNavigationComponent } from '../modules/pages/class-room/components/side-navigation/side-navigation.component';
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomMaterialCardComponent } from './components/custom-material-card/custom-material-card.component';
import { MatCardModule } from '@angular/material/card';
import { FancyListComponent } from './components/fancy-list/fancy-list.component';
import { MatListModule } from '@angular/material/list';
import { PostItComponent } from './components/post-it/post-it.component';
import { EditModuleDialogComponent } from './components/edit-module-dialog/edit-module-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CreateEventDialogComponent } from './components/create-event-dialog/create-event-dialog.component';


@NgModule({
  declarations: [EventTableComponent, CustomMaterialCardComponent, FancyListComponent, PostItComponent, EditModuleDialogComponent, CreateEventDialogComponent],
  exports: [EventTableComponent, CustomMaterialCardComponent, FancyListComponent, PostItComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
