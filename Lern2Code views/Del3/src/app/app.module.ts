import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AdminComponent } from './admin/admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './admin/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChartsModule } from 'ng2-charts';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ResetpasswordpageComponent } from './login/resetpasswordpage/resetpasswordpage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserRoleComponent } from './login/user-role/user-role.component';
import { AdduserroleComponent } from './login/user-role/adduserrole/adduserrole.component';
import {MatMenuModule} from '@angular/material/menu';
import { TutapplicationComponent } from './admin/tutapplication/tutapplication.component';
import { TutorsComponent } from './admin/tutors/tutors.component';
import { UnihomeComponent } from './admin/university/unihome/unihome.component';
import { AdduniComponent } from './admin/university/adduni/adduni.component';
import { ModhomeComponent } from './admin/university/modhome/modhome.component';
import { AddmodComponent } from './admin/module/addmod/addmod.component';
import { SearchStudentComponent } from './admin/search-student/search-student.component';
import { SessionContentComponent } from './admin/session-content/session-content.component';
import { AddCategoryComponent } from './admin/session-content/add-category/add-category.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { AddcategoryComponent } from './admin/courses/addcategory/addcategory.component';
import { CourseContentComponent } from './admin/courses/course-content/course-content.component';
import { AddContentComponent } from './admin/courses/course-content/add-content/add-content.component';
import {MatSelectModule} from '@angular/material/select';
import { DegreehomeComponent } from './admin/degree/degreehome/degreehome.component';
import { AdddegreeComponent } from './admin/degree/adddegree/adddegree.component';
import { CoursehomeComponent } from './admin/mcourse/coursehome/coursehome.component';
import { AddcourseComponent } from './admin/mcourse/addcourse/addcourse.component';
import { SubhomeComponent } from './admin/subscriptions/subhome/subhome.component';
import { AddsubComponent } from './admin/subscriptions/addsub/addsub.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { UploadpaymenComponent } from './admin/payment/uploadpaymen/uploadpaymen.component';
import { TutorComponent } from './tutor/tutor.component';
import { ApplicationComponent } from './tutor/application/application.component';
import { SearchstudnetComponent } from './tutor/searchstudnet/searchstudnet.component';
import { DisplaystudentComponent } from './tutor/searchstudnet/displaystudent/displaystudent.component';
import { MessagingComponent } from './tutor/messaging/messaging.component';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbStepperModule, NbSidebarModule  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {MatTabsModule} from '@angular/material/tabs';
import { CreatemessageComponent } from './tutor/messaging/createmessage/createmessage.component';
import { AddmessageComponent } from './tutor/searchstudnet/addmessage/addmessage.component';
import { MeassagestudentComponent } from './tutor/messaging/meassagestudent/meassagestudent.component';
import { ResourceComponent } from './tutor/resource/resource.component';
import { AddREsourceComponent } from './tutor/resource/add-resource/add-resource.component';
import { AddComponent } from './tutor/resource/add/add.component';
import { MaintainComponent } from './tutor/maintain/maintain.component';
import { ChangepasswordComponent } from './tutor/changepassword/changepassword.component';
import { SessionsComponent } from './tutor/sessions/sessions.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreatesessionComponent } from './tutor/sessions/createsession/createsession.component';
import { AddattendanceComponent } from './tutor/addattendance/addattendance.component';

import { SchedulerModule } from 'angular-calendar-scheduler';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { StudentComponent } from './student/student.component';
import { RegisterstudentComponent } from './student/registerstudent/registerstudent.component';
import { GrpsesscontenthomeComponent } from './tutor/grpsesscontent/grpsesscontenthome/grpsesscontenthome.component';
import { GrpsesscontentaddComponent } from './tutor/grpsesscontent/grpsesscontentadd/grpsesscontentadd.component';
import { AddgrpcontentComponent } from './tutor/grpsesscontent/addgrpcontent/addgrpcontent.component';
import { TutorssComponent } from './student/tutors/tutors.component';
import { MessagehomeComponent } from './student/messaging/messagehome/messagehome.component';
import { SendmessageComponent } from './student/messaging/sendmessage/sendmessage.component';
import { FeddbackhomeComponent } from './student/feedback/feddbackhome/feddbackhome.component';
import { AddfeedbackComponent } from './student/feedback/addfeedback/addfeedback.component';
import { ResourcehomeComponent } from './student/resourcehome/resourcehome.component';
import { SubscriptionshomeComponent } from './student/subscriptionshome/subscriptionshome.component';
import { GrpsesscontentComponent } from './student/grpsesscontent/grpsesscontent.component';
import { ViewgrpcontentComponent } from './student/grpsesscontent/viewgrpcontent/viewgrpcontent.component';
import { WatchvideoComponent } from './student/grpsesscontent/watchvideo/watchvideo.component';
import { MaintainstudentComponent } from './student/maintainstudent/maintainstudent.component';
import { PopupComponent } from './student/maintainstudent/popup/popup.component';
import { GroupsessionComponent } from './student/groupsession/groupsession.component';
import { DisplaysessionComponent } from './student/groupsession/displaysession/displaysession.component';
import { IndividualsessionComponent } from './student/individualsession/individualsession.component';
import { BookComponent } from './student/individualsession/book/book.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ShopComponent } from './student/shop/shop.component';
import { ViewcoursecontentComponent } from './student/viewcoursecontent/viewcoursecontent.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SideNavComponent,
    ForgotpasswordComponent,
    ResetpasswordpageComponent,
    UserRoleComponent,
   
    AdduserroleComponent,
        TutapplicationComponent,
        TutorsComponent,
        UnihomeComponent,
        AdduniComponent,
        SearchStudentComponent,
        SessionContentComponent,
        AddCategoryComponent,
        ModhomeComponent,
        AddmodComponent,
        CoursesComponent,
        AddcategoryComponent,
        CourseContentComponent,
        AddContentComponent,
        DegreehomeComponent,
        AdddegreeComponent,
        CoursehomeComponent,
        AddcourseComponent,
        SubhomeComponent,
        AddsubComponent,
        PaymentComponent,
        UploadpaymenComponent,
        TutorComponent,
        ApplicationComponent,
        SearchstudnetComponent,
        DisplaystudentComponent,
        MessagingComponent,
        CreatemessageComponent,
        AddmessageComponent,
        MeassagestudentComponent,
        ResourceComponent,
        AddREsourceComponent,
        AddComponent,
        MaintainComponent,
        ChangepasswordComponent,
        SessionsComponent,
        CreatesessionComponent,
        AddattendanceComponent,
        StudentComponent,
        RegisterstudentComponent,
        GrpsesscontenthomeComponent,
        GrpsesscontentaddComponent,
        AddgrpcontentComponent,
        TutorssComponent,
        MessagehomeComponent,
        SendmessageComponent,
        FeddbackhomeComponent,
        AddfeedbackComponent,
        ResourcehomeComponent,
        SubscriptionshomeComponent,
        GrpsesscontentComponent,
        ViewgrpcontentComponent,
        WatchvideoComponent,
        MaintainstudentComponent,
        PopupComponent,
        GroupsessionComponent,
        DisplaysessionComponent,
        IndividualsessionComponent,
        BookComponent,
        ShopComponent,
        ViewcoursecontentComponent,

        
        
    
  ],
  imports: [
    MatTooltipModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ChartsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTabsetModule,
    NbStepperModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
