import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlByLocationComponent } from './dl-by-location.component';

describe('DlByLocationComponent', () => {
  let component: DlByLocationComponent;
  let fixture: ComponentFixture<DlByLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlByLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
