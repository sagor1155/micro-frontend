import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  @ViewChild('placeHolder', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
  }

  async load(): Promise<void> {
      const m = await import('products/CatalogComponent');
      const ref = this.viewContainerRef.createComponent(m.CatalogComponent);
      // const compInstance = ref.instance;
      // compInstance.ngOnInit()
  }
}
