import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ComponentsModule } from '../components/components.module';
import { UsuarioCrearComponent } from './catalogos/usuarios/usuario-crear/usuario-crear.component';
import { UsuariosComponent } from './catalogos/usuarios/usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CatalogosComponent,
    ReportesComponent,
    ProveedoresComponent,
    UsuarioCrearComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    CatalogosComponent,
  ]
})
export class PagesModule { }
