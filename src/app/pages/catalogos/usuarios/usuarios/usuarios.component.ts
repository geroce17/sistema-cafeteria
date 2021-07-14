import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuario[] = [];

  constructor(private usuariosServices: UsuarioService) { }

  ngOnInit(): void {
    this.usuariosServices.getUsuarios()
    .subscribe((res: any) => {
      this.usuarios = res.usuarios;
    });
  }

}
