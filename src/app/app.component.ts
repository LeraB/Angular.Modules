import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-modules';
  textToCapitalize = 'teXt To TrAnSform';
  textWithBadWords = 'teXt sucker To TrAnSform donkey';
}
