import { Component, Input } from '@angular/core';
import { PostItData } from '../../interfaces/post-it-data';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostItDialogComponent } from 'src/app/modules/pages/class-room/components/create-post-it-dialog/create-post-it-dialog.component';
import { NotesService } from '../../services/notes.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss']
})
export class PostItComponent {

  @Input() note!: PostItData;

  constructor(private readonly dialog: MatDialog, private readonly notesService: NotesService) { }

  editNote(note: PostItData){
    console.log(note);
    const dialogRef = this.dialog.open(CreatePostItDialogComponent, {data: {title: note.title, content: note.content}});

    dialogRef.afterClosed().subscribe(result => {
      const newPostIt = {title: result.title, content: result.content, id: note.id}

      this.notesService.updateNote(newPostIt).subscribe((res: PostItData[]) => {
        window.location.reload();
      });
  })
}
deleteNote(){
  this.notesService.deleteNote(this.note.id).subscribe((res: PostItData[]) => {
    window.location.reload();
  });
}
}
