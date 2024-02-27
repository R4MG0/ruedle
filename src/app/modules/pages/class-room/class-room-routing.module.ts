import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesOverviewComponent } from './pages/modules-overview/modules-overview.component';

const routes: Routes = [
  {path: '', component: ModulesOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoomRoutingModule { }
