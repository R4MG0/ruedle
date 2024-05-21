import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinClassDialogComponent } from './join-class-dialog.component';

describe('JoinClassDialogComponent', () => {
  let component: JoinClassDialogComponent;
  let fixture: ComponentFixture<JoinClassDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinClassDialogComponent]
    });
    fixture = TestBed.createComponent(JoinClassDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
