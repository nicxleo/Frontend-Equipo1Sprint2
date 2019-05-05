import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document, r: Renderer2, meta: Meta) {
    r.addClass(document.body, 'skin-blue');
    r.addClass(document.body, 'sidebar-mini');
    r.addClass(document.body, 'hold-transition');
    
    meta.addTags([
      {charset: 'utf-8'},
      {httpEquiv: 'X-UA-Compatible', content: 'IE=edge'},
      {content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', name: 'viewport'}
   ], true);
  }
  title = 'SISRED-Frontend';
}