import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModuleDialogComponent } from './edit-module-dialog.component';

describe('EditModuleDialogComponent', () => {
  let component: EditModuleDialogComponent;
  let fixture: ComponentFixture<EditModuleDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditModuleDialogComponent]
    });
    fixture = TestBed.createComponent(EditModuleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
