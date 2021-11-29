import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pmo-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.less']
})
export class RestaurantComponent implements OnInit {

  showItems = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showItems = !this.showItems;
    }, 1000);
  }

}
