import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/models/usuario';

@Component({
  selector: 'app-usuario-recupera-senha',
  templateUrl: './usuario-recupera-senha.component.html',
  styleUrls: ['./usuario-recupera-senha.component.css']
})
export class UsuarioRecuperaSenhaComponent implements OnInit {

  usuario = {} as Usuario;

  constructor() { }

  ngOnInit() {
  }

}
