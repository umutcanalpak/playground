import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingTwoComponent } from './lazy-loading-two.component';

describe('LazyLoadingTwoComponent', () => {
  let component: LazyLoadingTwoComponent;
  let fixture: ComponentFixture<LazyLoadingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
