import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    const customEvent = new CustomEvent('eventFromMfe', {detail: {name: 'IBFD'}})
    window.dispatchEvent(customEvent);
  }
}
