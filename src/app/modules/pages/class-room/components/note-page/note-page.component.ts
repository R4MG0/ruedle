import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/shared/interfaces/person';
import { CreatePostItDialogComponent } from '../create-post-it-dialog/create-post-it-dialog.component';
import { PostItData } from 'src/app/shared/interfaces/post-it-data';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent {
  newPostIt !:any;
  @Input() moduleId: number = 0;
  @Input() members: Person[] = [];
  notes = [{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'}]
  constructor(public dialog: MatDialog, private readonly authService: AuthService) { }
  openDialog(){
    const emptyPostIt: PostItData = {
      text: '',
      title: '',
      nameOfWriter: this.authService.getUserName(),
      id: 1,
      date: new Date().toLocaleDateString()
    }
    const dialogRef = this.dialog.open(CreatePostItDialogComponent, {data: {...emptyPostIt}, width: '500px', height: '300px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.newPostIt = result;
      this.notes.push(this.newPostIt);
    });
  }
}

