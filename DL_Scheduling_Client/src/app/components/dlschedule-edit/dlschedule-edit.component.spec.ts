import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlscheduleEditComponent } from './dlschedule-edit.component';

describe('DlscheduleEditComponent', () => {
  let component: DlscheduleEditComponent;
  let fixture: ComponentFixture<DlscheduleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlscheduleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlscheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
