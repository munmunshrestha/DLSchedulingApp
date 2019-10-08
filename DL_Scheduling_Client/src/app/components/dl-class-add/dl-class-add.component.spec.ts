import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlClassAddComponent } from './dl-class-add.component';

describe('DlClassAddComponent', () => {
  let component: DlClassAddComponent;
  let fixture: ComponentFixture<DlClassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlClassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlClassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
