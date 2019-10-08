import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdRequestLeaveComponent } from './std-request-leave.component';

describe('StdRequestLeaveComponent', () => {
  let component: StdRequestLeaveComponent;
  let fixture: ComponentFixture<StdRequestLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdRequestLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdRequestLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
