import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //  @Input() valueId:any;
  constructor() { }

  ngOnInit() {
    
  }
   
  //  if(valueId) {
  //   var data = JSON.parse( localStorage.getItem(this.valueId))
  //   alert(data)
  //  } 

}
