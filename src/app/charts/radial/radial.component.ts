import { Component, OnInit } from '@angular/core';
import { RadialCharts } from './initRadial';

@Component({
  selector: 'app-radial',
  templateUrl: './radial.component.html',
  styleUrls: ['./radial.component.css']
})
export class RadialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(RadialCharts);
  }

}
