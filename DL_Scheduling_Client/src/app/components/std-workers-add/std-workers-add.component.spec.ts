import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdWorkersAddComponent } from './std-workers-add.component';

describe('StdWorkersAddComponent', () => {
  let component: StdWorkersAddComponent;
  let fixture: ComponentFixture<StdWorkersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdWorkersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdWorkersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
