import { AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: '<div #vc></div>',
})
export class WrapperComponent implements AfterContentInit {

  @ViewChild('vc', {read: ElementRef, static: true}) vc!: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {

    const elementName = this.route.snapshot.data['elementName'];
    const load = this.route.snapshot.data['load'];

    load()
      .then((_: any) => console.debug(`element ${elementName} loaded!`))
      .catch((err: any) => console.error(`error loading ${elementName}:`, err));

    const element = document.createElement(elementName);
    this.vc.nativeElement.appendChild(element);

  }

}
