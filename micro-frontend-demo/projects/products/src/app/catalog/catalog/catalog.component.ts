import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtilsService } from 'projects/utils/src/public-api';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input() text = '';
  @Output() click: EventEmitter<void> = new EventEmitter();

  constructor(private utilsSvc: UtilsService) {
  }

  ngOnInit(): void {
  }

  onButtonClick() {
    console.log('MFE: Counter is: ', this.utilsSvc.value);
    // this.click.emit();
  }

}
