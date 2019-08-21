import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaledarPage } from './caledar.page';

describe('CaledarPage', () => {
  let component: CaledarPage;
  let fixture: ComponentFixture<CaledarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaledarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaledarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
