import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-material-card',
  templateUrl: './custom-material-card.component.html',
  styleUrls: ['./custom-material-card.component.scss']
})
export class CustomMaterialCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgSrc: string = '';
  @Input() subtitle: string = '';
  @Input() showButtons!: boolean;

  ngOnInit(): void {
      if(this.showButtons === undefined){
        this.showButtons = true;
      }
  }
}
