import { Injectable } from '@angular/core';
import { ClassModule } from '../interfaces/class-module';

@Injectable({
  providedIn: 'root'
})
export class ModulesOverviewService {

  constructor() { }

  getModules(userUuid: string):ClassModule[] {
    let module :ClassModule= {
      id: 1,
      name: "Module 1",
      description: "This is a module",
      members: [
        {
          name: "John Doe",
          className: "Class 1"
        },
        {
          name: "Jane Doe",
          className: "Class 1"
        }
      ]
    }
    let modules:ClassModule[] = []
    for (let i = 0; i < 5; i++) {
      module.id = i+1;
      module.name = "Module " + (i+1);
      modules.push(module);
    }
    return modules;
  }
}
