import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPizzaPage } from './add-pizza.page';

describe('AddPizzaPage', () => {
  let component: AddPizzaPage;
  let fixture: ComponentFixture<AddPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPizzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
