import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesOverviewComponent } from './pages/modules-overview/modules-overview.component';
import { AuthGuard } from 'src/app/core/auth.guard';
import { OverviewModuleComponent } from './pages/overview-module/overview-module.component';

const routes: Routes = [
  {path: '', component: ModulesOverviewComponent, canActivate: [AuthGuard]},
  {path: 'module/:moduleId', component: OverviewModuleComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoomRoutingModule { }
