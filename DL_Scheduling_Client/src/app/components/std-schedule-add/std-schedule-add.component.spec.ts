import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdScheduleAddComponent } from './std-schedule-add.component';

describe('StdScheduleAddComponent', () => {
  let component: StdScheduleAddComponent;
  let fixture: ComponentFixture<StdScheduleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdScheduleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdScheduleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
