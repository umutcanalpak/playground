import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraltComponent } from './geralt.component';

describe('GeraltComponent', () => {
  let component: GeraltComponent;
  let fixture: ComponentFixture<GeraltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeraltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeraltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
