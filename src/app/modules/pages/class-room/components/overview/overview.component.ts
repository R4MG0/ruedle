import { Component, Input, OnInit } from '@angular/core';
import { ClassModule } from 'src/app/shared/interfaces/class-module';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  modules: ClassModule[] = []
  @Input() isClass = false;
  constructor(private readonly modulesOverviewService: ModulesOverviewService) { }
  ngOnInit(): void {
    if(this.isClass){
      this.modulesOverviewService.getClasses().subscribe((classes) => {
        console.log(classes);
        this.modules = classes;
      });
    }
      else{
     this.modulesOverviewService.getModules().subscribe((modules) => {
      this.modules = modules;
     });
     }
    }
  link (moduleId: number) :string {
    if(this.isClass){
      return `class/${moduleId}/module` as string
    }
    return `class/module/${moduleId}` as string
  }
}
