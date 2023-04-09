import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesseComponent } from './jesse.component';

describe('JesseComponent', () => {
  let component: JesseComponent;
  let fixture: ComponentFixture<JesseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JesseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JesseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
