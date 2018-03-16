import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutService } from '../../services/workout.service';
import { MessageService } from '../../services/message.service';
import { UserdataService } from '../../services/userdata.service';
import { WorkoutdataService } from '../../services/workoutdata.service';
import { Workout } from '../../model/Workout';
import { User } from '../../model/User';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutService]
})
export class WorkoutComponent implements OnInit {
  
  user: any = {};
  workout: any = {};

  constructor(
    private router: Router,
    private workoutService: WorkoutService,
    private messageService: MessageService,
    private userdataService: UserdataService,
    private workoutdataService: WorkoutdataService
  ) { }

  redirect() {
    this.router.navigate(['./workoutList']);
  }

  ngOnInit() {
  }

  createWorkout() {
    this.workout.user = this.userdataService;
    this.workoutdataService.calBurntPerUnitTime=this.workout.calBurntPerUnitTime;
    this.workoutdataService.unitTime=this.workout.unitTime;
    this.workoutService.createWorkout(this.workout)
      .subscribe(
      data => {
        this.messageService.success('Workout Created successfully', true);
        this.router.navigate(['workoutList']);
      },
      error => {
        this.messageService.error(error.error.message);
        this.router.navigate(['workoutList']);
      }
      );
  }


}

