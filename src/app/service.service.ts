import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyDetails } from 'src/PropertyDetails';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

baseUrl='http://localhost:8082/getDetails'
baseUrl1='http://localhost:8082/updateUser'
baseUrl2='http://localhost:8082/deleteDetailsById'
baseUrl3='http://localhost:8082/updateById'

  constructor(private httpCLient:HttpClient) { }

load():Observable<any>{
  return this.httpCLient.get(`${this.baseUrl}`);
}

deleteById(id:number):Observable<any>{
  return this.httpCLient.delete(`http://localhost:8082/deleteDetailsById/${id}`);
}

// updateDetails(data:any){
//   return this.httpCLient.put(`${this.baseUrl3}`,data);
// }

add(data:any){
  return this.httpCLient.post(`http://localhost:8082/details`,data);
}

getById(id:any){
  return this.httpCLient.get(`http://localhost:8082/getDetailsById/${id}`);
}

// updatePropertyDetails(id:number,propertyDetails: PropertyDetails): Observable<Object>{
//     return this.httpCLient.put(`${this.baseUrl3}/${id}`,propertyDetails);
// }

updateById(id:number,pd:any){
  return this.httpCLient.put(`${this.baseUrl3}/${id}`,pd);
}

}

