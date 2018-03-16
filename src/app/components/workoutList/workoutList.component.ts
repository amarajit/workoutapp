import { Component, OnInit } from '@angular/core';
import { WorkoutListService } from '../../services/workoutList.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { UserdataService } from '../../services/userdata.service';
import { WorkoutdataService } from '../../services/workoutdata.service';
import { User } from '../../model/User';
@Component({
  selector: 'app-workoutlist',
  templateUrl: './workoutList.component.html',
  styleUrls: ['./workoutList.component.css'],
  providers : [ WorkoutListService ]
})
export class WorkoutListComponent implements OnInit {
  
  workoutList: any=[];
  workout: any = {};

  constructor(
    private router: Router,
    private workoutListService: WorkoutListService,
    private messageService: MessageService,
    private userdataService: UserdataService,
    private workoutdataService: WorkoutdataService
  ) { 
    this.workoutListService.getWorkoutList(this.userdataService.id);
  }

  ngOnInit() {
    this.workoutListService.getWorkoutList(this.userdataService.id)
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

   redirectToWorkTx(index: number) {
    this.workoutdataService.setWorkoutId (this.workoutList[index].id);
    this.workoutdataService.calBurntPerUnitTime = this.workoutList[index].calBurntPerUnitTime;
    this.workoutdataService.unitTime = this.workoutList[index].unitTime;
    this.router.navigate(['./workoutTxList']);
  }
 
}