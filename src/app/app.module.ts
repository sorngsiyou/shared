import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PromotionComponent } from './promotion/promotion.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';



const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactsComponent},
  {path:'promotion',component:PromotionComponent},
  {path:'user',component:UsersComponent},
  {path:'**',component:NopageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    PromotionComponent,
    HomeComponent,
    NopageComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
