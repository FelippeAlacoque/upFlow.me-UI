import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { _throw as throwError } from 'rxjs/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Login } from 'app/models/login';

@Injectable()
export class RecuperaSenhaService {

  url = 'http://localhost:8080/api/sendMail';
  httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

  constructor(private httpClient: HttpClient) { }

  recuperarSenha(login: Login){
    return this.httpClient.post(this.url,login);
  }
}
