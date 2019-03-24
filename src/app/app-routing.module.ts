import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformativoComponent } from './informativo/informativo.component';
import { InformativoDoisComponent } from './informativo-dois/informativo-dois.component';
import { JavaClassComponent } from './java-class/java-class.component';

const routes: Routes = [
  { path: 'informativo', component: InformativoComponent },
  { path: 'informativo-dois', component: InformativoDoisComponent },
  { path: 'java-class', component: JavaClassComponent },
  { path: 'inicio', component: InicioComponent},
  //direciona rota inicial p/ a página inicio
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }