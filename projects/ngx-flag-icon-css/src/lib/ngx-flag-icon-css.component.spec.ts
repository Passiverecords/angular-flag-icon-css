import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFlagIconCssComponent } from './ngx-flag-icon-css.component';

describe('NgxFlagIconCssComponent', () => {
  let component: NgxFlagIconCssComponent;
  let fixture: ComponentFixture<NgxFlagIconCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlagIconCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlagIconCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
