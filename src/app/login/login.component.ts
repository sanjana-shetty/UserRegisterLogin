import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {}
  public valueId:any
 
  constructor(private router: Router) {
    
   }
  
  ngOnInit() {
    
  }
  onLoginSubmit() {
    var key =(<HTMLInputElement>document.getElementById('LoginId')).value;
    var check=(<HTMLInputElement>document.getElementById('password')).value;
    var data = JSON.parse( localStorage.getItem(key))
    this.valueId=key;
    if(data && check==data.password){
      this.router.navigateByUrl('/home');
    }else{
      alert('User does not exist.Please register to login')
    }

    
  }

  
}
