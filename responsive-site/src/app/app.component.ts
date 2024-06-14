import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FormsModule, AngularDirectivesComponent,AngularPipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Interpolation(one way binding)';
  names = 'Two way binding ';
}
