import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationUser } from '../interfaces/registration-user';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private readonly http: HttpClient) { }

  registerUser(user: RegistrationUser) {
    return this.http.post('http://localhost:5432/user/sign-up', user);
  }
  loginUser(user: RegistrationUser) {
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    observe: 'response'
};
    return this.http.post('http://localhost:8080/user/login', user, {observe:'body' ,responseType: 'text'}).pipe(
      map((response: any) => {
        return response;
      }
    ));
  }
}
