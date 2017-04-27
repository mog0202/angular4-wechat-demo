import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { UserService } from './user.service';
import { RedirectComponent } from './redirect.component';
import { MyInfoComponent } from './my-info.component';
import { MyInfoService } from './my-info.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    RedirectComponent,
    MyInfoComponent
  ],
  providers: [UserService, HomeService,MyInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
