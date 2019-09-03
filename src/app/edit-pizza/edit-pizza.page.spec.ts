import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPizzaPage } from './edit-pizza.page';

describe('EditPizzaPage', () => {
  let component: EditPizzaPage;
  let fixture: ComponentFixture<EditPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPizzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
