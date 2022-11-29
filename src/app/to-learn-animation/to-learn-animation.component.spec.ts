import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLearnAnimationComponent } from './to-learn-animation.component';

describe('ToLearnAnimationComponent', () => {
  let component: ToLearnAnimationComponent;
  let fixture: ComponentFixture<ToLearnAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToLearnAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLearnAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
