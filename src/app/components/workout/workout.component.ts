import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WorkoutService } from '../../services/workout.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workout: any = {};
  
  constructor(
    private router: Router,
    private workoutService: WorkoutService,
    private messageService: MessageService
  ) { }

  createWorkout() {
    this.workoutService.createWorkout(this.workout)
        .subscribe(
            data => {
                this.messageService.success('Workout Created successfully', true);
                this.router.navigate(['/workout']);
            },
            error => {
                this.messageService.error(error.error.message);
            }
            );
  }


  ngOnInit() {
  }

}

