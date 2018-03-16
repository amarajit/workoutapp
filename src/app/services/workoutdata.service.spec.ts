import { TestBed, inject } from '@angular/core/testing';

import { WorkoutdataService } from './workoutdata.service';

describe('WorkoutdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutdataService]
    });
  });

  it('should be created', inject([WorkoutdataService], (service: WorkoutdataService) => {
    expect(service).toBeTruthy();
  }));
});
