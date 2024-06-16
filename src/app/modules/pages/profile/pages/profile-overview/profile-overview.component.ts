import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.scss']
})
export class ProfileOverviewComponent {

  logout(){
    localStorage.setItem('token', 'false');
    window.location.reload();
  }
  get username(){
    return localStorage.getItem('username');
  }
}
