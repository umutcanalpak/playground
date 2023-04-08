import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaviComponent } from './mavi.component';

describe('MaviComponent', () => {
  let component: MaviComponent;
  let fixture: ComponentFixture<MaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
