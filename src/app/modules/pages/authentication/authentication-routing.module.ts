import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TokenGuard } from 'src/app/core/token.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [TokenGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [TokenGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
