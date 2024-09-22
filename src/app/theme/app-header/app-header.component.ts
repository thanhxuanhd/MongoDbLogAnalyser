import { Component } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  isToggle: boolean;

  constructor(){
    this.isToggle = false;
  }

  onToggleChange(){
    this.isToggle = !this.isToggle;
  }
}
