import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-http-auth',
  standalone: true,
  imports: [HttpClient],
  templateUrl: './angular-http-auth.component.html',
  styleUrl: './angular-http-auth.component.css'
})
export class AngularHttpAuthComponent {

}
