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
import { SearchStudentComponent } from './admin/search-student/search-student.component';
import{SessionContentComponent} from './admin/session-content/session-content.component';
import{TestComponent} from './test/test.component'
import { from } from 'rxjs';
import { CoursesComponent } from './admin/courses/courses.component';

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
  {path:'addmodule',component:AddmodComponent},
  {path:'adduniversity', component:AdduniComponent},
  {path:'searchstudent', component:SearchStudentComponent},
  {path:'SessionContent', component:SessionContentComponent},
  {path:'test', component:TestComponent},
  {path:'courses',component:CoursesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
