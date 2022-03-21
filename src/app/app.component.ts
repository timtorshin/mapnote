import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public attribute = { id: 'text' };

  public onClick() {
    if (this.attribute.id === 'text') {
      this.attribute = { id: 'paragraph' };
    } else {
      this.attribute = { id: 'text' };
    }
  }
}
