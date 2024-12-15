import { Component, OnInit } from '@angular/core';
import { EmplyerService } from '../services/emplyer.service';

@Component({
  selector: 'app-datacompnent',
  templateUrl: './datacompnent.component.html',
  styleUrls: ['./datacompnent.component.scss']
})
export class DatacompnentComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: EmplyerService) {}

  ngOnInit(): void {

    this.companyService.getCompanies().subscribe(
      (data) => {
        this.companies = data; 
      },
      (error) => {
        console.error('Error fetching companies:', error);
      }
    );
  }
  onedit(company: any) {
    this.companyService.setSelectedCompany(company);  // Set the company for editing
    console.log(company)
  }

}
