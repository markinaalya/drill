import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService, AuthService } from './services/user.service'
import { DrillerComponent } from './driller/driller.component'
import { MainPageComponent } from './main-page/main-page.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {SocketService} from './services/socket.service';
//конфиг соединения
const config: SocketIoConfig = { url: 'http://127.0.0.1:5002/', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    DrillerComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config) // инициализация модуля сокетов
  ],
  providers: [ UserService, AuthService, SocketService],
  bootstrap: [AppComponent]
})

export class AppModule { }
