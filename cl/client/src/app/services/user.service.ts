import { Injectable } from '@angular/core';
import { UserModel } from '../modeles/user.model';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthService {
    loggedIn = false;

    role: object = {
        driller: false,
        drilling_engineer: false,
        geologist: false,
        sup: false // super user
    }

    user: UserModel= {
        login: "",
        password: "",
        permission: "",
    }

    newUser: UserModel = {
        login: "",
        password: "",
        permission: "",
    }

    addNew(){
        this.user = this.newUser
    }

    constructor(private router: Router) {
   
    }
  
    logIn(login: string, passord: string, permission: string) {
      this.loggedIn = true;
      this.user.login = login;
      this.user.password = passord;
      this.user.permission = permission;
    }
  
    logOut() {
      this.loggedIn = false;
      this.user.login = "";
      this.user.permission = "";
      this.user.password = "";
      console.log(this.role)
    }
  
    get isLoggedIn() {
      return this.loggedIn;
    }
  
}

@Injectable({
    providedIn: 'root'
  })

  export class UserService implements CanActivate {

    constructor(private authService: AuthService, private router: Router){
    }
  
    canActivate(route: ActivatedRouteSnapshot): boolean {
          const isLoggedIn = this.authService.isLoggedIn;
          //const isLoginForm = route.routeConfig.path === 'login';
          if (isLoggedIn) {
              return false;
          }
          else return true
      }
  
      signIn(login: string, passord: string, permission: string){
        this.authService.logIn(login, passord, permission)
      }
  
      signOut(){ 
        this.authService.logOut()
      }
  
  
  }