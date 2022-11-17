import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    const busEvent = new CustomEvent('app-event-bus', {
      bubbles: true,
      detail: {
        eventType: 'catalog-event',
        customData: 'some data here'
      }
    });
    dispatchEvent(busEvent);
  }

}
