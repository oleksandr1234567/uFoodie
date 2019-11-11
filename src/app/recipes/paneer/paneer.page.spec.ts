import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneerPage } from './paneer.page';

describe('PaneerPage', () => {
  let component: PaneerPage;
  let fixture: ComponentFixture<PaneerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
