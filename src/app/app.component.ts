import { Component } from '@angular/core';
import { UsarioService } from './usuario/usario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsarioService]
})
export class AppComponent {
  title = 'app';


}
