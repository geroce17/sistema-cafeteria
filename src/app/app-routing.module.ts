import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { HomeComponent } from './pages/home/home.component';
import { CatalogosComponent } from './pages/catalogos/catalogos.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'catalogos', component: CatalogosComponent },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }