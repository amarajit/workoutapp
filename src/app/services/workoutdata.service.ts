import { Injectable } from '@angular/core';

@Injectable()
export class WorkoutdataService {

  constructor() { }

  public userId: number;
  public calBurntPerUnitTime: number;
  public unitTime: string;
  public id: number;

  getWorkoutId(): number {
    return this.id;
  }

  setWorkoutId(id: number) {
    this.id = id;
  }

}
