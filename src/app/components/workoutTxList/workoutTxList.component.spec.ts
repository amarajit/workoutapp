import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTxListComponent } from './workoutTxList.component';

describe('WorkoutTxnListComponent', () => {
  let component: WorkoutTxListComponent;
  let fixture: ComponentFixture<WorkoutTxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutTxListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutTxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
