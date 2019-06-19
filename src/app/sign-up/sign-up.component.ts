import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  model:any = {}
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    alert(JSON.stringify(this.model))
    localStorage.setItem('user', JSON.stringify(this.model))
  }
}
