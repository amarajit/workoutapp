import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WorkoutComponent } from './components/workout/workout.component';
import { WorkoutListComponent } from './components/workoutList/workoutList.component';
import { RegisterComponent } from './components/register/register.component';
import { WorkoutTxListComponent } from './components/workoutTxList/workoutTxList.component';
import { WorkoutTxComponent } from './components/workoutTx/workoutTx.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'workout', component: WorkoutComponent},
  { path: 'workoutList', component: WorkoutListComponent},
  { path: 'workoutTxList', component: WorkoutTxListComponent},
  { path: 'workoutTx', component: WorkoutTxComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}