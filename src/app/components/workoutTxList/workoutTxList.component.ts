import { Component, OnInit } from '@angular/core';
import { WorkoutTxService } from '../../services/workoutTx.service';
import { WorkoutTxListService } from '../../services/workoutTxList.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { WorkoutdataService } from '../../services/workoutdata.service';
import { Input } from '@angular/core';
import { User } from '../../model/user';
import { Workout } from '../../model/workout';

@Component({
    selector: 'app-workoutTxList',
    templateUrl: './workoutTxList.component.html',
    styleUrls: ['./workoutTxList.component.css'],
    providers: [ WorkoutTxService, WorkoutTxListService ]
})
export class WorkoutTxListComponent implements OnInit {

    workoutTxnList: any = [];

    constructor(private router: Router,
        private workoutTxService: WorkoutTxService,
        private workoutTxListService: WorkoutTxListService,
        private messageService: MessageService,
        private workoutdataService: WorkoutdataService) {
        this.workoutTxListService.getWorkoutTxList(this.workoutdataService.getWorkoutId());
    }

    redirect() {
        this.router.navigate(['./workoutTx']);
    }

    ngOnInit() {
        this.workoutTxListService.getWorkoutTxList(this.workoutdataService.getWorkoutId())
            .subscribe(
            data => {
                this.workoutTxnList = data;
            },
            error => {
                this.messageService.error(error.error.message);
            });
    }

    redirectBack(){
        this.router.navigate(['./workoutList']);
    }
}