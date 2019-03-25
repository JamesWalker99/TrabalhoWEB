import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformativoComponent } from './informativo/informativo.component';
import { JavaClassComponent } from './java-class/java-class.component';
import { InformativoDoisComponent } from './informativo-dois/informativo-dois.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatOptionModule, MatSelectModule,
   MatAutocompleteModule, MatInputModule, MatExpansionModule, MatIconModule, MatDatepickerModule, MatCardTitle, MatCardModule, MatMenuTrigger, MatMenuModule, MatSidenavModule, MatDividerModule, MatListModule, MatNativeDateModule} from '@angular/material';  
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    InformativoComponent,
    JavaClassComponent,
    InformativoDoisComponent,
    InicioComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatNativeDateModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
