import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'
import { UserService, AuthService } from '../services/user.service';
import { UserModel } from '../modeles/user.model';

@Component({
  selector: 'app-driller',
  templateUrl: './driller.component.html',
  styleUrls: ['./driller.component.css']
})

export class DrillerComponent {

    user: UserModel | undefined
    text = ''
  constructor(private authService: AuthService){
    this.user = this.authService.user
    console.log(this.user)
    this.text = 'hello, ' + this.user?.login
  }

}