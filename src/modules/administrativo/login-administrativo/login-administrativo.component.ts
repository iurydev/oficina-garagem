import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-administrativo',
  templateUrl: './login-administrativo.component.html',
  styleUrls: ['./login-administrativo.component.css']
})
export class LoginAdministrativoComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.IniciaFormulario();
  }

  IniciaFormulario() {
    this.formulario = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      check_humano: [false],
    })
  }

  ValidaUsuario() {
    console.log('OK.')
    console.log(this.formulario)
  }
}
