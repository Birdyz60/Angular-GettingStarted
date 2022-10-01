import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductClassComponent } from './products/product-list.component';
import { ConvertToStacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { IProductService } from './products/i.product.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [
    // Ici on est dans le module de l'application, mais on pourrait très bien avoir
    // une classe bastraite implémenté de différente manière et provide dans les
    // différents module de l'application avec une implémentation spécifique
    { provide: IProductService, useClass: ProductService }
  ],
  declarations: [
    AppComponent,
    ProductClassComponent,
    ConvertToStacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
