// Angular imports
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
<<<<<<< HEAD
import { PacksComponent } from './packs/packs.component';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { DessertsComponent } from './desserts/desserts.component';

=======
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 99f87a45933ec62381bd5a3efed79d9102ae9551





@NgModule({
  
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    PacksComponent,
    EmpanadasComponent,
    BoissonsComponent,
    DessertsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
<<<<<<< HEAD
=======
 
>>>>>>> 99f87a45933ec62381bd5a3efed79d9102ae9551
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
