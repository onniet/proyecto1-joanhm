import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'proyecto1-joanhm-root',
  template: `
    <header>
      <h1>Hola, soy Joan!!</h1>
    </header>
  `,
})
export class AppComponent {}
