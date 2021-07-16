import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../../services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styles: [
  ]
})
export class UsuarioCrearComponent implements OnInit {

  public usuarioForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(16)]],
      rol: ['USER_ROLE', Validators.required],
      nombre: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  crearUsuario() {
    this.submitted = true;

    if (this.usuarioForm.valid) {
      this.usuarioService.createUsuario(this.usuarioForm.value)
        .subscribe(res => {
          Swal.fire('Guardado', 'Usuario creado con exito', 'success')
          .then(r => {
            this.router.navigateByUrl('/catalogos/usuarios');
          });
          
        })
    }
    else {
      console.log("INVALID");

    }
  }

}
