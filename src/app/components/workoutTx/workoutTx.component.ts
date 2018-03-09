import { Component, OnInit } from '@angular/core';
import { WorkoutTxService } from '../../services/workoutTx.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-workoutTx',
  templateUrl: './workoutTx.component.html',
  styleUrls: ['./workoutTx.component.css'],
  providers: [WorkoutTxService]
})
export class WorkoutTxComponent implements OnInit {

  workoutTxn: any = {};
  loading = false;
  workoutTxnList: any = [];
  @Input() user: User;
  constructor(
    private router: Router,
    private workoutTxService: WorkoutTxService,
    private messageService: MessageService
  ) {

  }

  ngOnInit() {
  }
  createWorkoutTxn() {
    this.workoutTxService.createWorkoutTxn(this.workoutTxn)
      .subscribe(
      data => {
        this.messageService.success('Workout Transaction successfully added.', true);
        this.router.navigate(['/workoutTx']);
      },
      error => {
        this.messageService.error(error.error.message);

      });
  }
  redirect() {
    this.router.navigate(['./workoutTx']);
  }
}