import { Component } from '@angular/core';

@Component({
  selector: 'app-app-footer',
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {
  author = 'Xuan Nguyen Thanh';
  currentYear: number = new Date().getFullYear();
}
