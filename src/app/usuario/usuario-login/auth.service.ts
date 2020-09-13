import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { _throw as throwError } from 'rxjs/observable/throw';
import 'rxjs/add/operator/toPromise';

import { Login } from 'app/models/login';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  url = 'http://localhost:8080/api/usuarios/login';
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  constructor(private router: Router, private httpClient: HttpClient) { }

  logar(login: Login) { 
    return this.httpClient.post(this.url,login);
    //this.router.navigate(['/cadastro']);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no CLIENT SIDE
      errorMessage = error.error.message;
    } else {
      // Erro no SERVER SIDE
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
