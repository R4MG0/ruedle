import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileOverviewComponent } from './pages/profile-overview/profile-overview.component';
import { AuthGuard } from 'src/app/core/auth.guard';

const routes: Routes = [
  {path: '', component: ProfileOverviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
