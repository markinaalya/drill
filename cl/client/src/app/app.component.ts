import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { UserModel } from './modeles/user.model';
import { UserService, AuthService } from './services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {SocketService} from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy{

  title = 'hello';

  constructor(private httpClient: HttpClient,  private route: ActivatedRoute, private router: Router,
    private userService: UserService,
    private authService: AuthService){
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  public ngOnInit(): void {
  }



}
