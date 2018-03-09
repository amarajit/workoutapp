import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { MessageComponent } from './components/message/message.component'
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { RegisterService } from './services/register.service';
import { WorkoutService } from './services/workout.service';
import { WorkoutListService } from './services/workoutList.service';
import { ServiceUrlProviderService } from './services/service-url-provider.service';
import { WorkoutListComponent } from './components/workoutList/workoutList.component';
import { WorkoutTxListComponent } from './components/workoutTxList/workoutTxList.component';
import { WorkoutTxComponent } from './components/workoutTx/workoutTx.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WorkoutComponent,
    MessageComponent,
    WorkoutListComponent,
    WorkoutTxListComponent,
    WorkoutTxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    MessageService, 
    RegisterService, 
    WorkoutService, 
    WorkoutListService,
    ServiceUrlProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
