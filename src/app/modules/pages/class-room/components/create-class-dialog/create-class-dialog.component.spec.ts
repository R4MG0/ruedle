import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassDialogComponent } from './create-class-dialog.component';

describe('CreateClassDialogComponent', () => {
  let component: CreateClassDialogComponent;
  let fixture: ComponentFixture<CreateClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClassDialogComponent]
    });
    fixture = TestBed.createComponent(CreateClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
