import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutService } from '../../services/workout.service';
import { MessageService } from '../../services/message.service';
import { Workout } from '../../model/Workout';
import { User } from '../../model/User';
@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
  user: User = { userName: "", password: "" };
  workout: Workout = { title: "", calBurntPerUnitTime: 0, unitTime: "", user: this.user };

  constructor(
    private router: Router,
    private workoutService: WorkoutService,
    private messageService: MessageService
  ) { }

  redirect() {
    this.router.navigate(['./workoutList']);
  }

  ngOnInit() {
  }
  
  createWorkout() {
    console.log("userName-------------->" + this.user.userName);
    console.log("calBurnt-------------->" + this.workout.calBurntPerUnitTime);
    this.workout.user = this.user;
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

