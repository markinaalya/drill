import { Component, OnInit, SimpleChanges} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UserModel } from '../modeles/user.model';
import { UserService, AuthService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class mainComponent implements OnInit{
    
  title = 'client';
  dat = ''
  user!: UserModel;

  constructor(private httpClient: HttpClient,  private route: ActivatedRoute, private router: Router,
    private userService: UserService,
    private authService: AuthService){
    this.sayHi()
  }


  ngOnInit() {
    this.authService.addNew();
    this.user = this.authService.user
  }

    sayHi() {
    this.httpClient.get<any>('http://127.0.0.1:5002').subscribe(data => {
      console.log(data as JSON);
      this.dat = data['text']
    })
  }

  sayHi2() {
    this.httpClient.get<any>('http://127.0.0.1:5002/hello').subscribe(data => {
      console.log(data['text'])
      this.dat = data['text']
    })
  }

  signin(login: string, psw: string) {
    this.httpClient.get<any>('http://127.0.0.1:5002/signin/'+ login + '/' + psw).subscribe(data => {
        if (data['password'] == psw && data['login'] != undefined){
          this.authService.logIn(data['login'], data['password'], data['permission'])
          console.log(this.authService.loggedIn)
    
        }
    })
    this.router.navigate(['driller']);

  }
}
