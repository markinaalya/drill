import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService, AuthService } from './services/user.service'
import { DrillerComponent } from './driller/driller.component'
import { mainComponent } from './main-page/main-page.component'


const routes: Routes = [
{ path: '', component: mainComponent, canActivate: [ UserService ] },
{ path: 'driller', component: DrillerComponent, canActivate: [ UserService ] },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
