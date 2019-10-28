import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdWorkersComponent } from './std-workers.component';

describe('StdWorkersComponent', () => {
  let component: StdWorkersComponent;
  let fixture: ComponentFixture<StdWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
