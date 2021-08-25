import { RegisterComponent } from './home/register/register.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'listTasks',
    component: ListTaskComponent,
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
  },
  {
    path : 'registerUser',
    component: RegisterUserComponent,
  },
  {
    path: 'listUser',
    component: ListUserComponent,
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
