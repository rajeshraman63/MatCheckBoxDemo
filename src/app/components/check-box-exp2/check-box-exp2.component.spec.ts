import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxExp2Component } from './check-box-exp2.component';

describe('CheckBoxExp2Component', () => {
  let component: CheckBoxExp2Component;
  let fixture: ComponentFixture<CheckBoxExp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxExp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxExp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
