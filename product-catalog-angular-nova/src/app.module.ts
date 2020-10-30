import { NgModule, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleModule } from './components/example/example.module'
import { ExampleComponent } from './components/example/example.component';
//import { ProductListModule } from './components/product-list/product-list.module';
//import { ProductCardModule } from './components/product-card/product-card.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AppRoutingModule } from './components/app-routing.module';
import { SocialSharingComponent } from './components/social-sharing/social-sharing.component';

const APP_ID = 'hypernova';

const components = {
  'ProductCatalog': ProductListComponent,
  'ProductDetail': ProductDetailComponent
}

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    SocialSharingComponent
  ],
  imports: [
    ExampleModule,
    //ProductListModule,
    //ProductCardModule,
    AppRoutingModule,
    NgxPaginationModule,
    ShareButtonsModule,
    ShareIconsModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserModule.withServerTransition({ appId: APP_ID }),
  ],
  entryComponents: [ProductListComponent, ProductCardComponent, ProductDetailComponent]
})
export class AppModule {
  constructor (
    @Inject('Hypernova.Name') private name: string,
    @Inject('Hypernova.Node') private node: HTMLElement
    ){}

  ngDoBootstrap(app) {
    const Component = components[this.name]
    if (Component) {
      return app.bootstrap(Component, this.node)
    }
  };
}
