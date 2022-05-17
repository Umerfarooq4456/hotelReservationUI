import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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






const AppRoutes: Routes = [
  { path: 'Login' ,  component : LoginComponent},
  { path: 'Singup' ,  component: SingupComponent} ,
  { path: '' ,  component: ReservationContentComponent},
  { path: 'Serchbutton' ,  component: SerchbuttonComponent},
  ]




@NgModule({
  declarations: [
 AppComponent,
    LoginComponent,
    SingupComponent,
    ReservationContentComponent,
    SerchbuttonComponent,
    RoomGridComponent,
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
    MatCardModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
