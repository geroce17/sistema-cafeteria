import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    ".as-background { width: 100vw; height: 100vh; background-image: url('../../../assets/img/background-image/pexels-kaboompics-com-6267.jpg'); background-size: cover; } "
  ]
})
export class LoginComponent {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(16)]],
    password: ['', [Validators.required, Validators.maxLength(16)]]
  })

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) { }

  login() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.usuarioService.loginUser(this.loginForm.value).subscribe(
        res => {
          // navegar al dashboard
          this.router.navigateByUrl('/home');
        },
        err => {
          console.log(err);
          Swal.fire('Error', err.error.msg, 'error');
        }
      );
    }
    else {
      Swal.fire('Error', "Formulario no válido", 'error');
    }
  }

  campoInvalido(campo: string): boolean {
    return !this.loginForm.get(campo).value && this.formSubmitted == true;
  }

}
