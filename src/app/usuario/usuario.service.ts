import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  url = 'http://localhost:8080/api/usuarios';

  consultar(): Promise<any> {
    return this.http.get(this.url).toPromise().then(response =>response.json);
  }

  salvar(usuario: any): Promise<any> {
    return this.http.post(this.url, usuario).toPromise().then(response => response.json);
  }

  excluir (id: string): Promise<void> {
    return this.http.delete(this.url+ '/' + id).toPromise().then(()=>null);
  }

  atualizar(usuario: any): Promise<any> {
    return this.http.put(this.url + '/'+ usuario.id, usuario)
      .toPromise()
      .then(response => response.json())
      .catch(erro => {
        return Promise.reject(`Erro ao alterar dados do usuário ${usuario.id}.`);
      });
  }
}
