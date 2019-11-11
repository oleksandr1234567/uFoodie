import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TikkaPage } from './tikka.page';

describe('TikkaPage', () => {
  let component: TikkaPage;
  let fixture: ComponentFixture<TikkaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TikkaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TikkaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
