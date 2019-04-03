import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingAndAccessoriesPage } from './clothing-and-accessories.page';

describe('ClothingAndAccessoriesPage', () => {
  let component: ClothingAndAccessoriesPage;
  let fixture: ComponentFixture<ClothingAndAccessoriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingAndAccessoriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingAndAccessoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
