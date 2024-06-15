import { Component, Input, OnInit } from '@angular/core';
import { ClassModule } from 'src/app/shared/interfaces/class-module';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  modules: any[] = []
  @Input() isClass = false;
  // @Input() newClass: any;
  constructor(private readonly modulesOverviewService: ModulesOverviewService) { }
  ngOnInit(): void {
    if(this.isClass){
      this.modulesOverviewService.getClasses().subscribe((classes) => {
        console.log(classes);
        this.modules = classes;
      });
    }
      else{
     this.modulesOverviewService.getModules(3).subscribe((modules) => {
      this.modules = modules;
     });
     }
    }
  link (moduleId: number, classId?: number) :string {
    console.log('moduleId', moduleId)
    if(this.isClass){
      return `class/${moduleId}/module` as string
    }
    return `class/${classId}/module/${moduleId}` as string
  }
}
