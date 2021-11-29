import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pmo-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  @Output() onClickBackButton = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
