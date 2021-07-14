import { Component, Input, OnInit } from '@angular/core';
import { CatalogoItem } from '../../interfaces/catalogo-item.interface';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styleUrls: ['./catalogo-item.component.css']
})
export class CatalogoItemComponent implements OnInit {

  @Input() CatalogoInfo: CatalogoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
