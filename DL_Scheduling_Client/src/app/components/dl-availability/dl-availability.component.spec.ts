import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAvailabilityComponent } from './dl-availability.component';

describe('DlAvailabilityComponent', () => {
  let component: DlAvailabilityComponent;
  let fixture: ComponentFixture<DlAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
