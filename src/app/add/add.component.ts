import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyDetails } from 'src/PropertyDetails';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  PropertyDetails:PropertyDetails=new PropertyDetails();

  constructor(private formBuilder:FormBuilder,private s:ServiceService,private r:Router) { }
  addDetails:any;

  ngOnInit(): void {
    this.addDetails=this.formBuilder.group({
      Owner_First_Name:[''],
      Owner_Last_Name:[''],
      Prop_Address:[''],
      Prop_Type:[''],
      Prop_Legal_Desc:[''],
      Prop_Tax_Amount:[''],
      Prop_Tax_Paid_Status:[''],
      Prop_Tax_Paid_By:['']
    })
  }

 

  add(data:any){
    alert(data.Owner_First_Name);
    this.PropertyDetails.ownerFirstName=data.Owner_First_Name;
    this.PropertyDetails.ownerLastName=data.Owner_Last_Name;
    this.PropertyDetails.propAddress=data.Prop_Address;
    this.PropertyDetails.propType=data.Prop_Type;
    this.PropertyDetails.propLegalDesc=data.Prop_Legal_Desc;
    this.PropertyDetails.propTaxAmount=data.Prop_Tax_Amount;
    this.PropertyDetails.propTaxPaidStatus=data.Prop_Tax_Paid_Status;
    this.PropertyDetails.propTaxPaidBy=data.Prop_Tax_Paid_By;

    this.s.add(this.PropertyDetails).subscribe(data=>{console.log("success")
  this.r.navigate(['/search'])
  });
    }

}
