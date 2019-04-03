import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage2Page } from './landing-page2.page';

describe('LandingPage2Page', () => {
  let component: LandingPage2Page;
  let fixture: ComponentFixture<LandingPage2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPage2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
