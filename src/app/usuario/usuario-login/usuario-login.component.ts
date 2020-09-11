import { Component, OnInit } from '@angular/core';
import { Usuario } from 'app/models/usuario';
import { UsarioService } from '../usario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(private usuarioService: UsarioService) { }

  ngOnInit() {
  }

}
