import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'app/models/usuario';
import { UsarioService } from '../usario.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario = {} as Usuario;
  usuarios: Usuario[];

  constructor(private usuarioService: UsarioService) { }

  ngOnInit() {
  }

  salvarUsuario(form: NgForm) {
    if (this.usuario.id !== undefined) {
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(() => {
        form.reset();
      });
    } else {
      this.usuarioService.salvarUsuario(this.usuario).subscribe(() => {
        form.reset();
        });
      }    
    }
  }
