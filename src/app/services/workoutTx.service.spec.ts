import { TestBed, inject } from '@angular/core/testing';

import { WorkoutTxService } from './workoutTx.service';

describe('WorkoutTxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutTxService]
    });
  });

  it('should be created', inject([WorkoutTxService], (service: WorkoutTxService) => {
    expect(service).toBeTruthy();
  }));
});
