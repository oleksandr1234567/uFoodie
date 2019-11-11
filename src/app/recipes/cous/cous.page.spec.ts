import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CousPage } from './cous.page';

describe('CousPage', () => {
  let component: CousPage;
  let fixture: ComponentFixture<CousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
