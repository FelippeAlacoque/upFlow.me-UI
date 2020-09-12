import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import { InputMaskModule } from 'primeng/primeng';
import { PasswordModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioCadastroComponent } from './usuario/usuario-cadastro/usuario-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { UsarioService } from './usuario/usario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    NavbarComponent,
    UsuarioLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    UsarioService, 
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
