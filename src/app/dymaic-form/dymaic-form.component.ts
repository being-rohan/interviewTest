import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EmplyerService } from '../services/emplyer.service';
 


@Component({
  selector: 'app-dymaic-form',
  templateUrl: './dymaic-form.component.html',
  styleUrls: ['./dymaic-form.component.scss']
})
export class DymaicFormComponent implements OnInit {



  employer = {
    companyName: '',
    sector: ''
  }
  employerForm: FormGroup;
  currentTheme = 'light-theme'; // Default theme
  selectedCompany: any = null;
  constructor(private fb: FormBuilder, private translate: TranslateService,private employerService: EmplyerService) {
    this.employerForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sector: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    });

    this.translate.use('en'); // Default language
  }

    ngOnInit(): void {
      this.employerService.selectedCompany$.subscribe(company => {
        if (company) {
          this.selectedCompany = company;
          this.patchForm(company); 
        } else {
          this.selectedCompany = null;
          this.resetForm(); 
        }
      });
      
    }


  resetForm() {
    this.employerForm.reset();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
  }
  onsubmit(){
    console.log(this.employerForm.value);

  }
  patchForm(company: any) {
    if (company && company.name && company.sector) {
      this.employerForm.patchValue({
        companyName: company.name,
        sector: company.sector
      });
    }
  }
}
