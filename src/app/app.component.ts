import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ruedle';

  ngOnInit(): void {
      if (localStorage.getItem('token') === null) {
          localStorage.setItem('token', 'false');
      }
  }
}
