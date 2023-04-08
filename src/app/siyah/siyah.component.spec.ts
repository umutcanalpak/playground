import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiyahComponent } from './siyah.component';

describe('SiyahComponent', () => {
  let component: SiyahComponent;
  let fixture: ComponentFixture<SiyahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiyahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
