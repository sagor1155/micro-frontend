import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule, LoadRemoteModuleEsmOptions } from '@angular-architects/module-federation';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    // this.load();
    // fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) => {
    //   console.log('event bus: ', e);
    // });
  }

  async load(): Promise<void> {
      // const m = await import('products/CatalogComponent');
      const m = await loadRemoteModule(<LoadRemoteModuleEsmOptions>{
        type: 'module',
        remoteEntry: 'http://localhost:3000/products.js',
        exposedModule: './CatalogComponent'
      });
      const ref = this.viewContainerRef.createComponent(m.CatalogComponent);
      const compInstance = ref.instance;
      // compInstance.ngOnInit()
      console.log('component instance: ', compInstance)
  }


}
