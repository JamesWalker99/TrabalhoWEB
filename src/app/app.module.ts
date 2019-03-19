import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformativoComponent } from './informativo/informativo.component';
import { JavaClassComponent } from './java-class/java-class.component';
import { InformativoDoisComponent } from './informativo-dois/informativo-dois.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    InformativoComponent,
    JavaClassComponent,
    InformativoDoisComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
