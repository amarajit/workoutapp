import { User } from './user'; 
export class Workout {
    id: number;  
    title: string;
    calBurntPerUnitTime: number;
    unitTime: string;
    user: User;
  }