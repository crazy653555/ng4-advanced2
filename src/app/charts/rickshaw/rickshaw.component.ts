import { Component, OnInit } from '@angular/core';
import { RadialCharts } from '../radial/initRadial';

@Component({
  selector: 'app-rickshaw',
  templateUrl: './rickshaw.component.html',
  styleUrls: ['./rickshaw.component.css']
})
export class RickshawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if( !document.querySelector('#rickshaw-chart1') ||
    !document.querySelector('#rickshaw-chart2') ||
    !document.querySelector('#rickshaw-chart3') )
    return;

    $(RadialCharts)
  }

}
