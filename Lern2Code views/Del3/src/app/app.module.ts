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
import { TestComponent } from './test/test.component';
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
        TestComponent,
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
    
  ],
  imports: [
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
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
