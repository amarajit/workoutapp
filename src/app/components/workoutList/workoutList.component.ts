import { Component, OnInit } from '@angular/core';
import { WorkoutListService } from '../../services/workoutList.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { User } from '../../model/User';
@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutList.component.html',
  styleUrls: ['./workoutList.component.css']
})
export class WorkoutListComponent implements OnInit {
  
  user: User={userName:"Jithendra", password:""};
  workoutList: any=[];
  workout: any = {};

  constructor(
    private router: Router,
    private workoutListService: WorkoutListService,
    private messageService: MessageService
  ) { 
    this.workoutListService.getWorkoutList(this.user.userName);
  }

  ngOnInit() {
    this.workoutListService.getWorkoutList(this.user.userName)
        .subscribe(
            data => {
               this.workoutList=data;
            },
            error => {
                this.messageService.error(error.error.message);
            });
  }
  redirect() {
    this.router.navigate(['./workout']);
  }

  redirectToWorkTx() {
    this.router.navigate(['./workoutTxList']);
  }
 
}