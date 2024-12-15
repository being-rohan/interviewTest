import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DymaicFormComponent } from './dymaic-form/dymaic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // For input fields
import { MatButtonModule } from '@angular/material/button'; // For buttons (e.g., submit buttons)
import { MatFormFieldModule } from '@angular/material/form-field'; // For form field wrapper (with label)
import { MatIconModule } from '@angular/material/icon'; // For icons (optional)
import { MatCardModule } from '@angular/material/card'; // For Card UI elements
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { DatacompnentComponent } from './datacompnent/datacompnent.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    DymaicFormComponent,
    DatacompnentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,       // Material input fields
    MatButtonModule,      // Material buttons
    MatFormFieldModule,   // Material form field (with label)
    MatIconModule,   
    MatTabsModule   ,  // Material icons (optional)
    MatCardModule,        // Material card for layout (optional)
    MatTooltipModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
