import { Component, Input } from '@angular/core';
import { PostItData } from '../../interfaces/post-it-data';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss']
})
export class PostItComponent {
  @Input() note!: PostItData;
}
