import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from 'projects/utils/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public text = 'Initial Text!';

  constructor(private utilsSvc: UtilsService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.utilsSvc.getTestEvent().subscribe(data => {
      console.log('Host: received test event');
      this.text = 'text changed';
    }));
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onClick() {
    console.log('Host: click from remote component');
  }
}
