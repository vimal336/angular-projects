import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  standalone: true,
  imports: [],
  templateUrl: './angular-directives.component.html',
  styleUrl: './angular-directives.component.css'
})
export class AngularDirectivesComponent {
 Title = "Directives";
 users = "List of users"
 usersdata = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    age: 22
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    age: 30
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve@example.com",
    age: 25
  }
];

}
