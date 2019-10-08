import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPage } from './finalizar.page';

describe('FinalizarPage', () => {
  let component: FinalizarPage;
  let fixture: ComponentFixture<FinalizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
