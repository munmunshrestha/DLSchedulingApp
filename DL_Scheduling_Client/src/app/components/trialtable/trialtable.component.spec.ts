import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialtableComponent } from './trialtable.component';

describe('TrialtableComponent', () => {
  let component: TrialtableComponent;
  let fixture: ComponentFixture<TrialtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
