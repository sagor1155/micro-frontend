import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
