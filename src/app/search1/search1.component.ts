import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { PropertyDetails } from 'src/PropertyDetails';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {

  propertyDetails?:PropertyDetails[];
  searchText:any;


  constructor(private s:ServiceService,private router:Router) { }

  ngOnInit(): void {
this.s.load().subscribe(data=>{
  console.log(data);
  this.propertyDetails=data;
},error=>{console.log(error)})
  }




}
