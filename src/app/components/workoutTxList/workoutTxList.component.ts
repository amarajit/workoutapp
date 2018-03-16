import { Component, OnInit } from '@angular/core';
import { WorkoutTxService } from '../../services/workoutTx.service';
import { WorkoutTxListService } from '../../services/workoutTxList.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Input } from '@angular/core';
import { User } from '../../model/user';
import { Workout } from '../../model/workout';

@Component({
    selector: 'app-workoutTxList',
    templateUrl: './workoutTxList.component.html',
    styleUrls: ['./workoutTxList.component.css'],
    providers: [WorkoutTxService, WorkoutTxListService]
})
export class WorkoutTxListComponent implements OnInit {
    workout: Workout = {"id":1, "title":"", "calBurntPerUnitTime":0, "unitTime":"", "user": null};
    workoutTxnList: any = [];

    constructor(private router: Router,
        private workoutTxService: WorkoutTxService,
        private workoutTxListService: WorkoutTxListService,
        private messageService: MessageService) {
        this.workoutTxListService.getWorkoutTxList(this.workout.id);
    }

    redirect() {
        this.router.navigate(['./workoutTx']);
    }

    ngOnInit() {
        this.workoutTxListService.getWorkoutTxList(this.workout.id)
            .subscribe(
            data => {
                this.workoutTxnList = data;
                console.log("Response: " + this.workoutTxnList);
            },
            error => {
                this.messageService.error(error.error.message);
            });
    }


}