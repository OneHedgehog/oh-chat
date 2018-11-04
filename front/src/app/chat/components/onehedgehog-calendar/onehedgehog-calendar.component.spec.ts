import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnehedgehogCalendarComponent } from './onehedgehog-calendar.component';

describe('OnehedgehogCalendarComponent', () => {
  let component: OnehedgehogCalendarComponent;
  let fixture: ComponentFixture<OnehedgehogCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnehedgehogCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnehedgehogCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
