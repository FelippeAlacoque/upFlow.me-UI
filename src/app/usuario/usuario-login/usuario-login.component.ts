import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'app/models/usuario';
import { Login } from 'app/models/login';
import { UsarioService } from '../usario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario = {} as Usuario;
  usuarios: Usuario[];
  login = {} as Login;

  constructor(private usuarioService: UsarioService) { }

  ngOnInit() {
  }

  logar(form: NgForm) {
    this.usuarioService.logar(this.login).subscribe(() => {
      form.reset();
    })
  }
  
}
