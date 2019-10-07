import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdScheduleComponent } from './std-schedule.component';

describe('StdScheduleComponent', () => {
  let component: StdScheduleComponent;
  let fixture: ComponentFixture<StdScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
