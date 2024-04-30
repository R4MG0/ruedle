import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/shared/interfaces/person';
import { CreatePostItDialogComponent } from '../create-post-it-dialog/create-post-it-dialog.component';
import { PostItData } from 'src/app/shared/interfaces/post-it-data';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent {
  newPostIt !:any;
  @Input() moduleId!: number | null;
  @Input() members: Person[] = [];
  notes = [{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'}]
  constructor(public dialog: MatDialog) { }
  openDialog(){
    const emptyPostIt: PostItData = {
      text: '',
      title: '',
      nameOfWriter: 'Marco',
      id: 1,
      date: '11.03.2000'
    }
    const dialogRef = this.dialog.open(CreatePostItDialogComponent, {data: {...emptyPostIt}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.newPostIt = result;
      this.notes.push(this.newPostIt);
    });
  }
}

