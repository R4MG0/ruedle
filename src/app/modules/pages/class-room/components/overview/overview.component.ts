import { Component, OnInit } from '@angular/core';
import { ClassModule } from 'src/app/shared/interfaces/class-module';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{
  modules: ClassModule[] = []
  constructor(private readonly modulesOverviewService: ModulesOverviewService) { }
  ngOnInit(): void {
     this.modules = this.modulesOverviewService.getModules("userUuid");
  }
  link (moduleId: number) :string {
    return `class/module/${moduleId}` as string
  }
}
