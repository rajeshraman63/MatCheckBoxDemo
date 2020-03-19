import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCheckBoxDemoComponent } from './mat-check-box-demo.component';

describe('MatCheckBoxDemoComponent', () => {
  let component: MatCheckBoxDemoComponent;
  let fixture: ComponentFixture<MatCheckBoxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCheckBoxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCheckBoxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
