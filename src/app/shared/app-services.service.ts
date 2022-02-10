import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class AppServices {

  constructor() { }

  getSum(sum: {a: number, b:  number}) {
    return sum.a + sum.b;
  }
}
