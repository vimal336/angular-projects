import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  name: string;
  accountNo: number;
  mobileNo: number;
  emailId: string;
  ifscCode: number;

  constructor() { }

  ngOnInit(): void {
  }

}
