import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage1Page } from './landing-page1.page';

describe('LandingPage1Page', () => {
  let component: LandingPage1Page;
  let fixture: ComponentFixture<LandingPage1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPage1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
