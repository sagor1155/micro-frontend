import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input() text = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
    this.click.emit();
  }

}
