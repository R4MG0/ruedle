import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostItComponent } from './post-it.component';

describe('PostItComponent', () => {
  let component: PostItComponent;
  let fixture: ComponentFixture<PostItComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostItComponent]
    });
    fixture = TestBed.createComponent(PostItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
