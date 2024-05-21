import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModulesOverviewService } from '../../services/modules-overview.service';
import { MatDialog } from '@angular/material/dialog';
import { EditModuleDialogComponent } from '../edit-module-dialog/edit-module-dialog.component';

@Component({
  selector: 'app-custom-material-card',
  templateUrl: './custom-material-card.component.html',
  styleUrls: ['./custom-material-card.component.scss']
})
export class CustomMaterialCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() description: string = '';
  @Input() imgSrc: string = '';
  @Input() showImg: boolean = false;
  @Input() subtitle: string = '';
  @Input() showButtons!: boolean;
  @Input() id!: number;

  deletion = false;


  constructor( private readonly router: Router, private readonly moduleService: ModulesOverviewService, public dialog: MatDialog) { }
  ngOnInit(): void {
      if(this.showButtons === undefined){
        this.showButtons = true;
      }
  }
  goTo(link: string){
    console.log(link)
    if(link === '' || this.deletion === true) return
    this.router.navigate([this.link]);
  }
  delete(){
    this.deletion = true;
    console.log('delete', this.id)
    this.moduleService.deleteModule(this.id).subscribe((res) => {
      console.log(res)
    });
    this.deletion = false;
  }

  edit(): void {
    const dialogRef = this.dialog.open(EditModuleDialogComponent, {
      data: {title: this.title, description: this.description},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.moduleService.editModule(this.id, result).subscribe((res) => {
        console.log(res);
      });
      // this.animal = result;
      console.log(result)
    });
  }
}
