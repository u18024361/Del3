import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ResetpasswordpageComponent } from './login/resetpasswordpage/resetpasswordpage.component';

const routes: Routes = [
  {path:'', redirectTo:'Login',pathMatch:'full'},
  {path:'Login', component:LoginComponent},
  {path:'Admin', component:AdminComponent},
  {path:'resetpassword', component:ResetpasswordpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
