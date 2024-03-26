import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { AuthGuard } from './core/auth.guard';
import { TokenGuard } from './core/token.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  // {path: 'home', component: HomeComponent},
  {path: 'class', loadChildren: () => import('./modules/pages/class-room/class-room.module').then(m => m.ClassRoomModule)},
  {path: 'profile', loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'authentication', loadChildren: () => import('./modules/pages/authentication/authentication.module').then(m => m.AuthenticationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
