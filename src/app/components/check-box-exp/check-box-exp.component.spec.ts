import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxExpComponent } from './check-box-exp.component';

describe('CheckBoxExpComponent', () => {
  let component: CheckBoxExpComponent;
  let fixture: ComponentFixture<CheckBoxExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
