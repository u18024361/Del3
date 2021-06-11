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
import { from } from 'rxjs';
import { CoursesComponent } from './admin/courses/courses.component';
import { CourseContentComponent } from './admin/courses/course-content/course-content.component';
import { DegreehomeComponent } from './admin/degree/degreehome/degreehome.component';
import { CoursehomeComponent } from './admin/mcourse/coursehome/coursehome.component';
import { SubhomeComponent } from './admin/subscriptions/subhome/subhome.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { ApplicationComponent } from './tutor/application/application.component';
import { SearchstudnetComponent } from './tutor/searchstudnet/searchstudnet.component';
import { MessagingComponent } from './tutor/messaging/messaging.component';

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
  {path:'Application', component:ApplicationComponent},
  {path:'coursecat',component:CoursesComponent},
  {path:'coursecontent', component:CourseContentComponent},
  {path:'degree', component:DegreehomeComponent},
  {path:'courses', component:CoursehomeComponent},
  {path:'subscription', component:SubhomeComponent},
  {path:'payment',component:PaymentComponent},
  {path:'studentSearch',component:SearchstudnetComponent},
  {path:'messaging',component:MessagingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
