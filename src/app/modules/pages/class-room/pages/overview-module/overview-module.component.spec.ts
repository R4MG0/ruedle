import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewModuleComponent } from './overview-module.component';

describe('OverviewModuleComponent', () => {
  let component: OverviewModuleComponent;
  let fixture: ComponentFixture<OverviewModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewModuleComponent]
    });
    fixture = TestBed.createComponent(OverviewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
