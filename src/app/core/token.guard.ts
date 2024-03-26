import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {
  token = localStorage.getItem('token');
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.token !== 'false') {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
