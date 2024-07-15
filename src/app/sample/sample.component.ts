import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div>
               <h1>{{title}}</h1>
               <button (click)="increment()">Increment</button>
               <p>{{count}}</p>
             </div>`
})
export class SampleComponent {
  title = 'Sample Component';
  count = 0;

  increment() {
    this.count++;
  }
}
