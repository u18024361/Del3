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
import { MeassagestudentComponent } from './tutor/messaging/meassagestudent/meassagestudent.component';
import { TutorComponent } from './tutor/tutor.component';
import { ResourceComponent } from './tutor/resource/resource.component';
import { AddREsourceComponent } from './tutor/resource/add-resource/add-resource.component';
import { SessionsComponent } from './tutor/sessions/sessions.component';
import { AttendanceComponent } from './tutor/attendance/attendance.component';
import { GrpsesscontenthomeComponent } from './tutor/grpsesscontent/grpsesscontenthome/grpsesscontenthome.component';
import { GrpsesscontentaddComponent } from './tutor/grpsesscontent/grpsesscontentadd/grpsesscontentadd.component';
import { StudentComponent } from './student/student.component';
import { RegisterstudentComponent } from './student/registerstudent/registerstudent.component';
import { TutorssComponent } from './student/tutors/tutors.component';
import { MessagehomeComponent } from './student/messaging/messagehome/messagehome.component';
import { FeddbackhomeComponent } from './student/feedback/feddbackhome/feddbackhome.component';
import { ResourcehomeComponent } from './student/resourcehome/resourcehome.component';
import { SubscriptionshomeComponent } from './student/subscriptionshome/subscriptionshome.component';
import { GrpsesscontentComponent } from './student/grpsesscontent/grpsesscontent.component';
import { ViewgrpcontentComponent } from './student/grpsesscontent/viewgrpcontent/viewgrpcontent.component';
import { MaintainstudentComponent } from './student/maintainstudent/maintainstudent.component';
import { GroupsessionComponent } from './student/groupsession/groupsession.component';
import { IndividualsessionComponent } from './student/individualsession/individualsession.component';
import { ShopComponent } from './student/shop/shop.component';

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
  {path:'studentSearchtutor',component:SearchstudnetComponent},
  {path:'tutormessaging',component:MessagingComponent},
  {path:'messagestudent',component:MeassagestudentComponent},
  {path:'tutorhome',component:TutorComponent},
  {path:'tutorresource',component:ResourceComponent},
  {path:'addresource',component:AddREsourceComponent},
  {path:'Sessions',component:SessionsComponent},
  {path:'attendance', component:AttendanceComponent},
  {path:'grpsesscontent', component:GrpsesscontenthomeComponent},
  {path:'addgrpsesscontent', component:GrpsesscontentaddComponent},
  {path:'studenthome',component:StudentComponent},
  {path:'Registerstudent',component:RegisterstudentComponent},
  {path:'Tutors',component:TutorssComponent},
  {path:'studentmsghome', component:MessagehomeComponent  },
  {path:'feedback', component:FeddbackhomeComponent},
  {path:'resource', component:ResourcehomeComponent},
  {path:'viewsubscriptions', component:SubscriptionshomeComponent},
  {path:'studentgrpcontent', component:GrpsesscontentComponent},
  {path:'viewgrpcontent', component:ViewgrpcontentComponent}
  {path:'Tutors',component:TutorssComponent},
  {path:'editstudent',component:MaintainstudentComponent},
  {path:'groupsession',component:GroupsessionComponent},
  {path:'individualsession',component:IndividualsessionComponent},
  {path:'shop',component:ShopComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
