import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestActionComponent } from './leave-request-action.component';

describe('LeaveRequestActionComponent', () => {
  let component: LeaveRequestActionComponent;
  let fixture: ComponentFixture<LeaveRequestActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveRequestActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRequestActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
