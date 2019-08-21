import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FgpasswordPage } from './fgpassword.page';

describe('FgpasswordPage', () => {
  let component: FgpasswordPage;
  let fixture: ComponentFixture<FgpasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FgpasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FgpasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
