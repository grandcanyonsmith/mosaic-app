import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndGardenPage } from './home-and-garden.page';

describe('HomeAndGardenPage', () => {
  let component: HomeAndGardenPage;
  let fixture: ComponentFixture<HomeAndGardenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndGardenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndGardenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
