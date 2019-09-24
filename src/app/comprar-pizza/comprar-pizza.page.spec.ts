import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPizzaPage } from './comprar-pizza.page';

describe('ComprarPizzaPage', () => {
  let component: ComprarPizzaPage;
  let fixture: ComponentFixture<ComprarPizzaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarPizzaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarPizzaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
