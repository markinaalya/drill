import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService, AuthService } from './services/user.service';
import { DrillerComponent } from './driller/driller.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
{ path: '', component: MainPageComponent},
{ path: 'driller', component: DrillerComponent, canActivate: [ UserService ] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
