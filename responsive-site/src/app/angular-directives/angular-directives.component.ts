import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css'
})
export class AngularDirectivesComponent {
 Title = "Directives";
 userlist = "List of users using (NgFor)&(NgClass)";
 num = "";

users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28 },
  { id: 2, name: "Bob Smith", email: "bob@example.com", age: 34 },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 22 },
  { id: 4, name: "Diana Prince", email: "diana@example.com", age: 30 },
  { id: 5, name: "Eve Davis", email: "eve@example.com", age: 25 }
];

}
