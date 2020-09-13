import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'app/models/usuario';
import { RecuperaSenhaService } from './recupera-senha.service';

@Component({
  selector: 'app-usuario-recupera-senha',
  templateUrl: './usuario-recupera-senha.component.html',
  styleUrls: ['./usuario-recupera-senha.component.css']
})
export class UsuarioRecuperaSenhaComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(private recuperaSenhaService: RecuperaSenhaService) { }

  ngOnInit() {
  }

  recuperarSenha(form: NgForm){
    this.recuperaSenhaService.recuperarSenha(this.usuario).subscribe(() => {
      form.reset();
    })
  }

}
