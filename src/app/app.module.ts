import { environment } from './../environments/environment';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselItemElementDirective } from './carousel/carousel-item-element.directive';
import { CarouselItemDirective } from './carousel/carousel-item.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { LogozComponent } from './logoz/logoz.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselItemElementDirective,
    CarouselItemDirective,
    CarouselComponent,
    LogozComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
