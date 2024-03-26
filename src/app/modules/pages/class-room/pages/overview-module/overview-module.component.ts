import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulesOverviewService } from 'src/app/shared/services/modules-overview.service';

@Component({
  selector: 'app-overview-module',
  templateUrl: './overview-module.component.html',
  styleUrls: ['./overview-module.component.scss']
})
export class OverviewModuleComponent implements OnInit{

  module = {};

  constructor(private moduleService: ModulesOverviewService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   const moduleId = this.route.snapshot.paramMap.get('moduleId');
   console.log('moduleId', moduleId)
    this.module = this.moduleService.getModuleById(moduleId!);
  }
}
