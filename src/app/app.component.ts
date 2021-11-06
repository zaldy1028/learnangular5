import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  query: string;
  artists: object;

  constructor() {
    this.query = 'Barot';
  }
}
