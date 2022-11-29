import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailListComponent } from './app-detail-list.component';

describe('AppDetailListComponent', () => {
  let component: AppDetailListComponent;
  let fixture: ComponentFixture<AppDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
