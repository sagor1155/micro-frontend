import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'projects/utils/src/public-api';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  public text = 'Initial Text!';

  constructor(private utilsSvc: UtilsService) {
  }

  ngOnInit(): void {
    this.utilsSvc.value = 99;
    console.log('Host: counter: ', this.utilsSvc.value);
  }

  onClick() {
    this.text = 'Text changed!';
    console.log('host: click from remote');
  }
}
