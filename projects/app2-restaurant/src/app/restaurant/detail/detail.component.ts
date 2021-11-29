import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class RestaurantDetailComponent implements OnInit {

  vars = {
    str: 'h1-teer',
    str2: 'h1-teer',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
