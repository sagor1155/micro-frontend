import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private counter = 0;

  constructor() {
    console.log('UtisService Constructor Call!');
  }

  get value(): number {
    return this.counter;
  }

  set value(val: number) {
    this.counter = val;
  }
}
