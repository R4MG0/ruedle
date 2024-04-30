import { Component, Input } from '@angular/core';
import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-fancy-list',
  templateUrl: './fancy-list.component.html',
  styleUrls: ['./fancy-list.component.scss']
})
export class FancyListComponent {
  @Input() members: Person[] = [];
}
