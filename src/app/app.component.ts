import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatAnchor } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'proyecto1-joanhm-root',
  template: `
    <header class="py-8 relative">
      <h1 class="text-5xl text-center mb-4">Hola, soy Joan!!</h1>
      <div class="flex justify-center">
        <hd-wallet-multi-button>Billetera</hd-wallet-multi-button>
      </div>

      @if (account() ){
      <div class="dbalance">
        <div class="db1">
          <img [src]="account()?.info?.image" class="w-8 h-8" />
          <p class="text.xl">{{ account()?.balance }}</p>
        </div>
        <div class="db2">
          <img [src]="account2()?.info?.image" class="w-8 h-8" />
          <p class="text.xl">{{ account2()?.balance }}</p>
        </div>
      </div>

      <p class="text.xl111">{{ history_account()?.timestamp }}</p>
      <p class="text.xl222">{{ history_account()?.fee }}</p>
      <p class="text.xl333">{{ history_account()?.fee_payer }}</p>
      <p class="text.xl">HOLAGOLAHOLA</p>
      <p class="text.xl">HOwsadasOLAHOLA</p>

      }

      <nav>
        <ul>
          <li>
            <a [routerLink]="['']" mat-raised-button>Home</a>
          </li>
          <li>
            <a [routerLink]="['settings']" mat-raised-button>Configuraciones</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet> </router-outlet>
    </main>
  `,
})
export class AppComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: true }
  );
  readonly account2 = computedAsync(
    () => this._shyftApiService.getAccount2(this._publicKey()?.toBase58()),
    { requireSync: true }
  );

  readonly history_account = computedAsync(
    () => this._shyftApiService.getTransaction(this._publicKey()?.toBase58()),
    { requireSync: true }
  );
}
