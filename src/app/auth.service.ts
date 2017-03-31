import { Injectable } from '@angular/core';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

@Injectable()
export class LoginService {
  user_details={
    username:'',
    name:'',
    email :'',
    password :''
  }
  msg='';


  constructor(public auth: Auth, public user: User) {

  }
  sign_up(user_details){
    let details: UserDetails = {'username': user_details.username,'name': user_details.name, 'email': user_details.email , 'password': user_details.password};
    this.auth.signup(details).then(() => {
      this.msg="welcome.";
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          this.msg='Email already exists.';
        } else {
          this.msg='Email incorrect.';
        }
      }
    });
}

  log_in(user_details){
    let details = {'email': user_details.email , 'password': user_details.password};
    this.auth.login('basic',details).then(() => {
      this.msg="welcome.";
    }, (err: IDetailedError<string[]>) => {
      this.msg="invalid information";
    });
  }

  log_out(){
    this.auth.logout();
  }
  is_authenticated(){
    if (this.auth.isAuthenticated()) {
      return true;
    }else {
      return false;
    }
  }

}
