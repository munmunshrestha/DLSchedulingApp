import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DLscheduleComponent } from './dlschedule.component';

describe('DLscheduleComponent', () => {
  let component: DLscheduleComponent;
  let fixture: ComponentFixture<DLscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DLscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DLscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
