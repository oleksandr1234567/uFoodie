import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtoastPage } from './ftoast.page';

describe('FtoastPage', () => {
  let component: FtoastPage;
  let fixture: ComponentFixture<FtoastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtoastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtoastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
