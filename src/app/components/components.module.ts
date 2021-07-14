import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CatalogoItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CatalogoItemComponent]
})
export class ComponentsModule { }
