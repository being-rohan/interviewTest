import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplyerService {
  private apiUrl = 'http://localhost:5195/api/Company/getCompanies'; // Update with your API endpoint
  private selectedCompanySource = new BehaviorSubject<any>(null); // Holds the selected company for editing
  selectedCompany$ = this.selectedCompanySource.asObservable();
  constructor(private http: HttpClient) { }


// Method to get all companies
getCompanies(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}
setSelectedCompany(company: any) {
  this.selectedCompanySource.next(company);  // Emit the company data
}
}
