import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  public text = 'Initial Text!';

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.text = 'Text changed!';
    console.log('host: click from remote');
  }
}
