import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChatComponent } from "./usuario/chat/chat.component";

import { UsuarioCadastroComponent } from "./usuario/usuario-cadastro/usuario-cadastro.component";
import { UsuarioLoginComponent } from "./usuario/usuario-login/usuario-login.component";
import { UsuarioRecuperaSenhaComponent } from "./usuario/usuario-recupera-senha/usuario-recupera-senha.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const APP_ROUTES: Routes =[ 
    { path: 'recupera', component: UsuarioRecuperaSenhaComponent },
    { path: 'cadastro', component: UsuarioCadastroComponent },
    { path:'login', component: UsuarioLoginComponent },
    { path:'chat', component: ChatComponent },
    { path: '', component: UsuarioComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);