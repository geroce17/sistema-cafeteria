import { Component, OnInit } from '@angular/core';
import { CatalogoItem } from 'src/app/interfaces/catalogo-item.interface';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.css']
})
export class CatalogosComponent implements OnInit {

  catalogos: CatalogoItem[] = [
    {
      Nombre: 'Usuarios',
      Descripcion: 'Registra y administra los usuarios del sistema',
      IconClass: 'fas fa-user-plus fa-6x',
      Url: '/catalogos/usuarios'
    } as CatalogoItem,
    {
      Nombre: 'Proveedores',
      Descripcion: 'Registra y administra los proveedores del sistema',
      IconClass: 'fas fa-truck fa-6x',
      Url: '/proveedores'
    } as CatalogoItem,
    {
      Nombre: 'Clientes',
      Descripcion: 'Da de alta y administra nuevos clientes del sistema',
      IconClass: 'fas fa-address-card fa-6x',
      Url: '/clientes'
    } as CatalogoItem,
    {
      Nombre: 'Productos',
      Descripcion: 'Da de alta y administra pruductos del sistema',
      IconClass: 'fas fa-box fa-6x',
      Url: '/productos'
    } as CatalogoItem
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
