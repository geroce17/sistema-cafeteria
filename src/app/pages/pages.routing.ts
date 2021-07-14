import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { UsuarioCrearComponent } from './catalogos/usuarios/usuario-crear/usuario-crear.component';
import { UsuariosComponent } from './catalogos/usuarios/usuarios/usuarios.component';

const routes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent, data: { titulo: 'Dashboard' } },
            { path: 'reportes', component: ReportesComponent, data: { titulo: 'Catalogos' } },
            { path: 'proveedores', component: ProveedoresComponent, data: { titulo: 'Catalogos' } },
            { path: '**', pathMatch: 'full', redirectTo: '' }
        ]
    },
    {
        path: 'catalogos',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: CatalogosComponent, data: { titulo: 'Catálogos' } },
            
            // Usuarios
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Listado de usuarios' } },
            { path: 'nuevo-usuario', component: UsuarioCrearComponent, data: { titulo: 'Crear nuevo usuario' } },
            
            { path: '**', pathMatch: 'full', redirectTo: '' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }