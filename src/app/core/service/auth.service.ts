import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getToken(): string {
    return localStorage.getItem('token') as string;
  }
  getUserName(): string {
    return localStorage.getItem('userName') as string;
  }
}
