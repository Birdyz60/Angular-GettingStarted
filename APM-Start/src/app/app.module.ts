import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { IProductService } from './products/i.product.service';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { ConvertToStacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  providers: [
    // Ici on est dans le module de l'application, mais on pourrait très bien avoir
    // une classe bastraite implémenté de différente manière et provide dans les
    // différents module de l'application avec une implémentation spécifique
    { provide: IProductService, useClass: ProductService }
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToStacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuard] },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
