import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.type = params['type'];
      console.log('對API發出KEY值取得新的資料內容')
    })
  }

  plusOne() {
    this.router.navigate(['/cards', parseInt(this.type) + 1]);
  }
}
