import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasPage } from './temas.page';

describe('TemasPage', () => {
  let component: TemasPage;
  let fixture: ComponentFixture<TemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
