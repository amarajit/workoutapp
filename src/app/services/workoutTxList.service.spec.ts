import { TestBed, inject } from '@angular/core/testing';

import { WorkoutTxListService } from './workoutTxList.service';

describe('WorkoutTxnListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutTxListService]
    });
  });

  it('should be created', inject([WorkoutTxListService], (service: WorkoutTxListService) => {
    expect(service).toBeTruthy();
  }));
});
