import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostItDialogComponent } from './create-post-it-dialog.component';

describe('CreatePostItDialogComponent', () => {
  let component: CreatePostItDialogComponent;
  let fixture: ComponentFixture<CreatePostItDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePostItDialogComponent]
    });
    fixture = TestBed.createComponent(CreatePostItDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
