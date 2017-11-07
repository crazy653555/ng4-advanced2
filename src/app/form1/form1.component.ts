import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  data: any = {
    title:"avon",
    subtitle:"miss you"
  };

  constructor() { }

  ngOnInit() {
  }

  doSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('no');
    }else{
      console.log('yes');
    }
  }

}
