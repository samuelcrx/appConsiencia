import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestoesPage } from './questoes.page';

describe('QuestoesPage', () => {
  let component: QuestoesPage;
  let fixture: ComponentFixture<QuestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
