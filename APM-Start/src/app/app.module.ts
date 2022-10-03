import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { IProductService } from './products/i.product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { ProductModule } from './products/product.module';
import { ProductService } from './products/product.service';

@NgModule({
  providers: [
    // Ici on est dans le module de l'application, mais on pourrait très bien avoir
    // une classe bastraite implémenté de différente manière et provide dans les
    // différents module de l'application avec une implémentation spécifique
    { provide: IProductService, useClass: ProductService }
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
