import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaghettiPage } from './spaghetti.page';

describe('SpaghettiPage', () => {
  let component: SpaghettiPage;
  let fixture: ComponentFixture<SpaghettiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaghettiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaghettiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
