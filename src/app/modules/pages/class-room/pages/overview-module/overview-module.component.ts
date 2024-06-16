import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassModule } from 'src/app/shared/interfaces/class-module';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-overview-module',
  templateUrl: './overview-module.component.html',
  styleUrls: ['./overview-module.component.scss']
})
export class OverviewModuleComponent implements OnInit{
selectedTabIndex!: number;
  module!:ClassModule;

  constructor(private moduleService: ModulesOverviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {  
    if(localStorage.getItem('tabIndex')) {
      this.selectedTabIndex = Number(localStorage.getItem('tabIndex'));
    }else{
      this.selectedTabIndex = 0;
  }
   const moduleId = this.route.snapshot.paramMap.get('moduleId');
   console.log('moduleId', moduleId)
    this.moduleService.getModuleById(moduleId!).subscribe((module: any) => {
      this.module = module[0];
    });
  }
  link (moduleId: number) :string {
    return `class/module/${moduleId}` as string
  }
  toggleActiveTab(event: any){
    this.selectedTabIndex = event.index;
    localStorage.setItem('tabIndex', event.index);
    // localStorage.setItem('tabIndex', event.index);
  }
}
