import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   c:any=0
  model:any = {}
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    alert(JSON.stringify(this.model))
    var key =(<HTMLInputElement>document.getElementById('email')).value;
    var key1 =(<HTMLInputElement>document.getElementById('userName')).value;
    var key2 =(<HTMLInputElement>document.getElementById('mobilenumber')).value;
    if (localStorage.getItem(key) !== null || localStorage.getItem(key1) !== null ||localStorage.getItem(key2) !== null) {
      alert('Registration for this Email/UserName/MobileNo already exists.Please try with different inputs.');
      (<HTMLInputElement>document.getElementById('email')).value='';
      (<HTMLInputElement>document.getElementById('userName')).value='';
      (<HTMLInputElement>document.getElementById('mobilenumber')).value=''
    }
    else {
      if (localStorage) {
        var item = JSON.stringify(this.model);
        localStorage.setItem(key, item);
        localStorage.setItem(key1, item);
        localStorage.setItem(key2, item);
       }
      alert('Registered Successfully')
      this.router.navigateByUrl('/');
    }
    

  }
}
