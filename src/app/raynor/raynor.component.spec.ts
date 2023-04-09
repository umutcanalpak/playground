import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaynorComponent } from './raynor.component';

describe('RaynorComponent', () => {
  let component: RaynorComponent;
  let fixture: ComponentFixture<RaynorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaynorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaynorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
