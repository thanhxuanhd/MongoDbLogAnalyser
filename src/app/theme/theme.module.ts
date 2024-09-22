import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports:[AppHeaderComponent, AppFooterComponent]
})
export class ThemeModule { }
