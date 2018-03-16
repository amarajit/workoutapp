import { Component, OnInit } from '@angular/core';
import { WorkoutTxService } from '../../services/workoutTx.service';
import { WorkoutdataService } from '../../services/workoutdata.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-workoutTx',
  templateUrl: './workoutTx.component.html',
  styleUrls: ['./workoutTx.component.css'],
  providers: [WorkoutTxService]
})
export class WorkoutTxComponent implements OnInit {

  workoutTxn: any = {};
  workoutTxnList: any=[];

  constructor(
    private router: Router,
    private workoutTxService: WorkoutTxService,
    private messageService: MessageService,
    private workoutdataService : WorkoutdataService
  ) {
  }

  ngOnInit() {
  }
  createWorkoutTxn() {
    this.workoutTxn.workout = this.workoutdataService;
    var startDate = new Date(this.workoutTxn.startTime).toISOString();
    this.workoutTxn.startTime=startDate.replace('Z','');
    var endDate = new Date(this.workoutTxn.stopTime).toISOString();
    this.workoutTxn.stopTime=endDate.replace('Z','');
    this.workoutTxService.createWorkoutTxn(this.workoutTxn)
      .subscribe(
      data => {
        this.messageService.success('Workout Transaction successfully added.', true);
        this.router.navigate(['/workoutTxList']);
      },
      error => {
        this.messageService.error(error.error.message);
      });
  }
  redirect() {
    this.router.navigate(['./workoutTxList']);
  }
}