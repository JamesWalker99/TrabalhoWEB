import { InicioComponent } from './inicio/inicio.component';
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
import {MatCardModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    InformativoComponent,
    JavaClassComponent,
    InformativoDoisComponent,
    NavComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
