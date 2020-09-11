import { Injectable } from '@angular/core';
import { Usuario } from 'app/models/usuario';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { _throw as throwError } from 'rxjs/observable/throw';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsarioService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/api/usuarios';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  buscarUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url)
      .pipe(retry(2),catchError(this.handleError))
  }

  buscarUsuarioPorID(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + '/' + id)
          .pipe(retry(2),catchError(this.handleError))
  }

  salvarUsuario(usuario: Usuario) {
    return this.httpClient.post(this.url,usuario);
    //return this.httpClient.post<Usuario>(this.url, JSON.stringify(usuario), this.httpOptions).pipe(retry(2),catchError(this.handleError))
  }

  atualizarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.url + '/' + usuario.id, JSON.stringify(usuario), this.httpOptions)
      .pipe(retry(1),catchError(this.handleError))
  }

  excluirUsuario(usuario: Usuario) {
    return this.httpClient.delete<Usuario>(this.url + '/' + usuario.id, this.httpOptions)
      .pipe(retry(1),catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no lado CLIENT SIDE
      errorMessage = error.error.message;
    } else {
      // Erro no SERVER SIDE
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };


}
