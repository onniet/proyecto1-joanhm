import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent],
  selector: 'proyecto1-joanhm-root',
  template: `
    <header class="py-8">
      <h1 class="text-5xl text-center mb-4">Hola, soy Joan!!</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button>Billetera</hd-wallet-multi-button>
      </div>
    </header>
  `,
})
export class AppComponent {}
