import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTxComponent } from './workoutTx.component';

describe('WorkoutTxComponent', () => {
  let component: WorkoutTxComponent;
  let fixture: ComponentFixture<WorkoutTxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutTxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
