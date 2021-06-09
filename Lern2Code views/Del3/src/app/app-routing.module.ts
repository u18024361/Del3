import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ResetpasswordpageComponent } from './login/resetpasswordpage/resetpasswordpage.component';
import{UserRoleComponent} from './login/user-role/user-role.component';
import {TutapplicationComponent} from './admin/tutapplication/tutapplication.component';
import { TutorsComponent } from './admin/tutors/tutors.component';
import { UnihomeComponent } from './admin/university/unihome/unihome.component';
import { AdduniComponent } from './admin/university/adduni/adduni.component';
import { ModhomeComponent } from './admin/university/modhome/modhome.component';
import { AddmodComponent } from './admin/module/addmod/addmod.component';

const routes: Routes = [
  {path:'', redirectTo:'Login',pathMatch:'full'},
  {path:'Login', component:LoginComponent},
  {path:'Admin', component:AdminComponent},
  {path:'resetpassword', component:ResetpasswordpageComponent},
  {path:'userrole', component:UserRoleComponent},
  {path:'tutapplication', component: TutapplicationComponent},
  {path:'tutors', component:TutorsComponent},
  {path:'university', component:UnihomeComponent},
  {path:'adduniversity', component:AdduniComponent},
  {path:'module',component:ModhomeComponent},
  {path:'addmodule',component:AddmodComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
