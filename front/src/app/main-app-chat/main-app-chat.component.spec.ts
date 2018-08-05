import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppChatComponent } from './main-app-chat.component';

describe('MainAppChatComponent', () => {
  let component: MainAppChatComponent;
  let fixture: ComponentFixture<MainAppChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
