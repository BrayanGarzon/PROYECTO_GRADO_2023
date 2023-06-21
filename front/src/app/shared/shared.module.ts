import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    BannerComponent
  ]
})
export class SharedModule { }
