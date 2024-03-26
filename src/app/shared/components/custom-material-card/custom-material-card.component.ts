import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private readonly router: Router) { }
  ngOnInit(): void {
      if(this.showButtons === undefined){
        this.showButtons = true;
      }
  }
  goTo(link: string){
    console.log(link)
    if(link === '') return
    this.router.navigate([this.link]);
  }
}
