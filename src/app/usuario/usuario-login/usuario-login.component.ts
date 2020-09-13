import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'app/models/usuario';
import { Login } from 'app/models/login';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario = {} as Usuario;
  usuarios: Usuario[];
  login = {} as Login;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar(form: NgForm){
    if(this.usuario.login !== undefined && this.usuario.senha !== undefined){
      console.log(this.usuario);
      this.authService.logar(this.usuario).subscribe(() => {
        form.reset();
      });
    }
  }

}
