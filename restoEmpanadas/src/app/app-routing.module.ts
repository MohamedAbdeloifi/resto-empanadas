import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  // home component
  { path: 'accueil', component: AccueilComponent},
  { path: 'menu', component: MenuComponent},
  // full à placer toujours en dernier
  { path: '**', redirectTo: 'home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
