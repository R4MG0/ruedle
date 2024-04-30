import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss']
})
export class PostItComponent {
  @Input() note: {text: string, title: string, nameOfWriter: string, id: number, date: string} = {text: '', title: '', nameOfWriter: '', id: 0, date: '12.11.2005'};
}
