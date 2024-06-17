import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationUser } from 'src/app/shared/interfaces/registration-user';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  register = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [ Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private readonly authenticationService: AuthenticationService, private router : Router) { }

  login() {
    console.log('aroisetnairsnt')
    const user: RegistrationUser = this.loginForm.value as RegistrationUser;
    if(this.register) {
      this.authenticationService.registerUser(user).subscribe((response) => {
        alert('User registered sucessfully! Please Login to continue.');
        this.register = false;
      });
      return;      
    }
    this.authenticationService.loginUser(user).subscribe((response) => {
      localStorage.setItem('token', response);
      localStorage.setItem('username', user.username);
      this.router.navigate(['/home']);
    });
  }
  toggleRegister(){
    this.register = !this.register;
  }
}
