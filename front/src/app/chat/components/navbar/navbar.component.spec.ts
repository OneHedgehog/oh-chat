import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavbarComponent} from './navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from '../../containers/app.component';
import {By} from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create Navbar', () => {
    expect(component).toBeTruthy();
  });

  it('should have input', () => {
    expect(compiled.querySelector('input[type="text"]')).toBeTruthy();
  });

  it('should have search icon', () => {
    expect(compiled.querySelector('.fa-search')).toBeTruthy();
  });


  it('should have focus on serach icon', () => {
    dispatchEvent(new Event('focus'));
    fixture.detectChanges();
  });


  //TODO click test
  it('should change input size when search icon clicked', () => {
    const searchInput = compiled.querySelector('input[type="text"]');
    console.log(searchInput.tagName);
    const inputBeforeFocus = fixture.debugElement.query(By.css(':focus'));
    console.log(inputBeforeFocus);
    console.log('fds');
  });
});
