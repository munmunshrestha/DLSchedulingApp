import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAssignClassComponent } from './dl-assign-class.component';

describe('DlAssignClassComponent', () => {
  let component: DlAssignClassComponent;
  let fixture: ComponentFixture<DlAssignClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlAssignClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlAssignClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
