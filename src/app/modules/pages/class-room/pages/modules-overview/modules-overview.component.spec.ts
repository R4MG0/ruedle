import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesOverviewComponent } from './modules-overview.component';

describe('ModulesOverviewComponent', () => {
  let component: ModulesOverviewComponent;
  let fixture: ComponentFixture<ModulesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulesOverviewComponent]
    });
    fixture = TestBed.createComponent(ModulesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
