import { Component, OnDestroy, OnInit } from '@angular/core';
import { UtilsService } from 'projects/utils/src/public-api';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public text = 'Initial Text!';

  constructor(private utilsSvc: UtilsService) {}

  ngOnInit(): void {
    this.subscription.add(this.utilsSvc.getTestEvent().subscribe(data => {
      console.log('Shell: Received Event Notification from MFE');
    }));

    this.subscription.add(fromEvent<CustomEvent>(window, 'eventFromMfe').subscribe(console.log));
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onClick = () => {
    this.text = 'Hola!';
    console.log('Shell: Click from MFE');
  }
}
