import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn = localStorage.getItem('token');

  constructor(private router: Router) {}

  canActivate(): boolean {
    console.log('aroistenarosintaorsietn', this.isLoggedIn);
    if (this.isLoggedIn !== 'false') {
      return true;
    } else {
      this.router.navigate(['/authentication/login']);
      return false;
    }
  }
}
