import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeModule } from './theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeModule] ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MongoDbLogAnalyzer';
}
