import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Person } from 'src/app/shared/interfaces/person';
import { CreatePostItDialogComponent } from '../create-post-it-dialog/create-post-it-dialog.component';
import { PostItData } from 'src/app/shared/interfaces/post-it-data';
import { AuthService } from 'src/app/core/service/auth.service';
import { NotesService } from 'src/app/shared/services/notes.service';
import { CreatePostItData } from 'src/app/shared/interfaces/create-post-it-data';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit{
  newPostIt !:any;
  @Input() moduleId: number = 0;
  @Input() members: Person[] = [];
  // notes = [{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'},{text: 'aioersntoiearsntoiearsnoairsenirsoen', title: 'oienarstoien', nameOfWriter: 'insaretinarso', id:1, date: '12.11.2005'}]
  notes!: PostItData[];
  constructor(public dialog: MatDialog, private readonly authService: AuthService, readonly notesService: NotesService) { }
  ngOnInit(): void {
    //TODO get notes from backend
    this.notesService.getNotes().subscribe((notes: any) => {
      this.notes = notes;
    })
  }
  openDialog(){
    const emptyPostIt: CreatePostItData = {
      title: '',
      content: '',
      schoolModuleId: this.moduleId
    }
    const dialogRef = this.dialog.open(CreatePostItDialogComponent, {data: {...emptyPostIt}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.newPostIt = result;
      this.notesService.cerateNote(this.newPostIt).subscribe((res: PostItData[]) => {
        this.notes = res;
        this.ngOnInit();
      });
      //TODO send new post it to backend
    });
  }
}

