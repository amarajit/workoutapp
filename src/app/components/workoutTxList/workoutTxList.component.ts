import { Component, OnInit } from '@angular/core';
import { WorkoutTxListService } from '../../services/workoutTxList.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
    selector: 'app-workoutTxList',
    templateUrl: './workoutTxList.component.html',
    styleUrls: ['./workoutTxList.component.css'],
    providers: [ WorkoutTxListService ]
})
export class WorkoutTxListComponent implements OnInit {
    
    @Input() user: User;
    workout: any = {};
    workoutTxnList: any = [];
    
    constructor(private router: Router,
        private workoutTxListService: WorkoutTxListService,
        private messageService: MessageService) {
        this.workoutTxListService.getWorkoutTxList(this.user);
    }

    redirect() {
        this.router.navigate(['./workoutTx']);
    }

    ngOnInit() {
        this.workoutTxListService.getWorkoutTxList(this.user)
            .subscribe(
            data => {
                this.workoutTxnList = data;
            },
            error => {
                this.messageService.error(error.error.message);
            });
    }
    

}