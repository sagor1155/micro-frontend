import { Component } from '@angular/core';
import { MfeRegistry } from 'ngx-mfe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(public mfeRegistry: MfeRegistry) {
    console.log('Mfe Registry: ', mfeRegistry);
  }
}
