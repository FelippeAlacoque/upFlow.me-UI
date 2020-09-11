import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

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
    this.buscarUsuarios();
  }

  salvarUsuario(form: NgForm) {
   /* this.usuarioService.salvarUsuario(this.usuario).subscribe(resposta => {
      this.usuarios.push(resposta);

      form.reset();
    })*/
    
    if (this.usuario.id !== undefined) {
      this.usuarioService.atualizarUsuario(this.usuario).subscribe(() => {
        form.reset();
      });
    } else {
      this.usuarioService.salvarUsuario(this.usuario).subscribe(() => {
        //this.cleanForm(form);
        form.reset();
      });
    }
    
  }

  buscarUsuarios() {
    this.usuarioService.buscarUsuarios().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    });
  }

  excluirUsuario(usuario: Usuario) {
    this.usuarioService.excluirUsuario(usuario).subscribe(() => {
      this.buscarUsuarios();
    });
  }

  //copia o usuário para ter os dados editados
  editCar(usuario: Usuario) {
    this.usuario = { ...usuario };
  }

  // limpa o form
  cleanForm(form: NgForm) {
    this.buscarUsuarios;
    form.resetForm();
    this.usuario = {} as Usuario;
  }

}
