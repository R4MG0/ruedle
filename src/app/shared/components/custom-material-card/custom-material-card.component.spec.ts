import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMaterialCardComponent } from './custom-material-card.component';

describe('CustomMaterialCardComponent', () => {
  let component: CustomMaterialCardComponent;
  let fixture: ComponentFixture<CustomMaterialCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMaterialCardComponent]
    });
    fixture = TestBed.createComponent(CustomMaterialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
