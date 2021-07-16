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
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.usuariosServices.getUsuarios()
      .subscribe((res: any) => {
        this.usuarios = res.usuarios;
      });
  }

  eliminarUsuario(usuario: Usuario) {
    this.usuariosServices.deleteUsuario(usuario.uid)
      .subscribe(res => {
        console.log(res);
        this.cargarUsuarios();
      });
  }

}
