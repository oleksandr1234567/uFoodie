import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VindalooPage } from './vindaloo.page';

describe('VindalooPage', () => {
  let component: VindalooPage;
  let fixture: ComponentFixture<VindalooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VindalooPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VindalooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
