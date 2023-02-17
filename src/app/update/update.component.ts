import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { PropertyDetails } from 'src/PropertyDetails';
import { data } from 'src/data';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  PropertyDetails:PropertyDetails=new PropertyDetails();
  
  constructor(private router:ActivatedRoute,private s:ServiceService,private formBuilder:FormBuilder,private r:Router) { }

  // updateForm=new FormGroup({
  //   Owner_First_Name:new FormControl(''),
  //   Owner_Last_Name:new FormControl(''),
  //   Prop_Address:new FormControl(''),
  //   Prop_Type:new FormControl(''),
  //   Prop_Legal_Desc:new FormControl(''),
  //   Prop_Tax_Amount:new FormControl(''),
  //   Prop_Tax_Paid_Status:new FormControl('')
  // })

  ngOnInit(): void {
    

    console.log(this.router.snapshot.params['id']);


    this.s.getById(this.router.snapshot.params['id']).subscribe((data:any)=>{console.log(data)
   this.PropertyDetails=data;
    })

    
  }

  onSubmit(data:any){
    console.log(data);
    this.s.updateById(this.router.snapshot.params['id'],data).subscribe(data=>{console.log("Yes done successfully")
    this.r.navigate(['/search'])
  })
  }

}
