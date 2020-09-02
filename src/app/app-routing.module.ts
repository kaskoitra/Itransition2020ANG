import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {MessageComponent} from './message/message.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {PrivatepageComponent} from './privatepage/privatepage.component';
import {RegisterUserComponent} from './registeruser/registeruser.component';

const routes: Routes = [
  {path: 'registeruser', component: RegisterUserComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'message', component: MessageComponent},
  {path: 'login', component: AuthenticationComponent},
  {path: 'privatepage', component: PrivatepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
