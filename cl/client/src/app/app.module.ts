import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { UserService, AuthService } from './services/user.service'
import { DrillerComponent } from './driller/driller.component'
import { mainComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DrillerComponent,
    mainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ UserService, AuthService,],
  bootstrap: [AppComponent]
})

export class AppModule { }
