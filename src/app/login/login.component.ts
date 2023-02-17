import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username!:string;
password!:string;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    if(this.username=="Sam" && this.password=="sam123"){
      this.router.navigate(["./search"])
      console.log("You have logged in as admin user!");
    }else if(this.username=="Sahaj" && this.password=="sah123"){
      this.router.navigate(["./search1"])
      console.log("You have logged in as normal user!");

    }
    else{
      alert("Not a authorised user!!!");
      console.log("Not a authorised user");
   }
  }

}
