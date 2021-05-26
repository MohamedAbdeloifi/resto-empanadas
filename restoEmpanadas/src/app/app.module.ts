// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PacksComponent } from './packs/packs.component';
import { EmpanadasComponent } from './empanadas/empanadas.component';
import { BoissonsComponent } from './boissons/boissons.component';
import { DessertsComponent } from './desserts/desserts.component';






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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
