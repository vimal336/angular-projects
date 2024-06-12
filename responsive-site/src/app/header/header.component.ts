import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  angular ="One Way Binding"
  doing = "Property Binding"


  func = "creating functions in interpolation"
  getfunc(){
    return this.func
  }
}
