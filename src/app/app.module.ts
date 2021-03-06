import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMaskModule, IConfig } from 'ngx-mask'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component'
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { ReservationContentComponent } from './reservation-content/reservation-content.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 'angular/material.core';
import {MatGridListModule} from '@angular/material/grid-list';
import { SerchbuttonComponent } from './serchbutton/serchbutton.component';
import { RoomGridComponent } from './room-grid/room-grid.component';
import { RoomdetailComponent } from './roomdetail/roomdetail.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerificationcodeComponent } from './verificationcode/verificationcode.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomepageComponent } from './homepage/homepage.component';






const AppRoutes: Routes = [
  { path: '' ,  component : LoginComponent},
  { path: 'Login' ,  component : LoginComponent},
  { path: 'Singup' ,  component: SingupComponent} ,
  { path: 'Reservation' ,  component: ReservationContentComponent},
  { path: 'Serchbutton' ,  component: SerchbuttonComponent},
  { path: 'roomDetail/:roomId' ,  component: RoomdetailComponent},
  {path: 'mybookings',  component: MybookingsComponent},
  { path: 'forgotpassword' ,  component: ForgotpasswordComponent},
  { path: 'verificationcode/:email' ,  component: VerificationcodeComponent},
  { path: 'resetpassword/:email' ,  component: ResetpasswordComponent},
  { path: 'loginform' ,  component :LoginComponent},
  { path: 'userprofile' ,  component :UserprofileComponent},
  {path : 'homepage' , component :HomepageComponent}
  ]




@NgModule({
  declarations: [
 AppComponent,
    LoginComponent,
    SingupComponent,
    ReservationContentComponent,
    SerchbuttonComponent,
    RoomGridComponent,
    RoomdetailComponent,
    MybookingsComponent,
    ForgotpasswordComponent,
    VerificationcodeComponent,
    ResetpasswordComponent,
    UserprofileComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(AppRoutes),
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    NgxMaskModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
