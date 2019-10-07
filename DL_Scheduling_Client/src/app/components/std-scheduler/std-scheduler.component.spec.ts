import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSchedulerComponent } from './std-scheduler.component';

describe('StdSchedulerComponent', () => {
  let component: StdSchedulerComponent;
  let fixture: ComponentFixture<StdSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
