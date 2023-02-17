import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { PropertyDetails } from 'src/PropertyDetails';
import { LoginComponent } from '../login/login.component';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  propertyDetails?:PropertyDetails[];
  searchText:any;


  constructor(private s:ServiceService,private router:Router) { }

  ngOnInit(): void {
this.s.load().subscribe(data=>{
  console.log(data);
  this.propertyDetails=data;
},error=>{console.log(error)})
  }

  deleteById(id:any){
    this.s.deleteById(id).subscribe(data=>{
      console.log(data);
      alert("Ok deleted");
    },error=>{console.log(error)})
  }

  update(id:any){
    console.log(id);
    alert("Redirecting to update details...");
    this.router.navigate(["./update/"+id])
  }
  
  add(){
    this.router.navigate(["/add"])
    alert("Redirecting to add details...");
  }
  //  update(id:any){
  //    this.s.updateById(id).subscribe(data=>{
  //      console.log(data);
  //      window.location.reload();
  //    },error=>{
  //      console.log(error)
  //    })
  // }

}
