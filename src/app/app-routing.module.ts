import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';
import { RedirectComponent } from './redirect.component';
import { MyInfoComponent } from './my-info.component';

const routes: Routes = [
  { path: '', component: RedirectComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UsersComponent },
  { path: 'myinfo', component: MyInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
