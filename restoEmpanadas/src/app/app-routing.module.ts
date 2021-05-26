import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { DessertsComponent } from './desserts/desserts.component';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { MenuComponent } from './menu/menu.component';
import { PacksComponent } from './packs/packs.component';

const routes: Routes = [
  // home component
  { path: 'accueil', component: AccueilComponent},
  // menu component
  { path: 'menu', component: MenuComponent},
  // packs component
  { path: 'menu/packs', component: PacksComponent},
  // empanadas component
  { path: 'menu/empanadas', component: EmpanadasComponent},
  // boissons component
  { path: 'menu/boissons', component: BoissonsComponent},
  // deesserts component
  { path: 'menu/desserts', component: DessertsComponent},
  // full à placer toujours en dernier
  { path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
