import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ UserService ]
})
export class LoginComponent implements OnInit {

  user: any = {};
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userdataService : UserdataService
  ) { }

  ngOnInit() {
  }

  login() {
     this.userService.login(this.user.username, this.user.password)
        .subscribe(
            data => {
              console.log("data.id--------------->"+data.userId);
               this.userdataService.id = data.userId;
               this.router.navigate(['workoutList']);
            });
  }

}

