import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { MessageService } from '../../services/message.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any = {};
  loading = false;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private messageService: MessageService
    
  ) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.registerService.register(this.user)
        .subscribe(
            data => {
                this.messageService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.messageService.error(error.error.message);
                this.loading = false;
            });
  }
}
