import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShyftApiService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _header = { 'x-api-key': '-FLc7Rge_8Fa_F5H' }; //la meva key de Shyft
  //private readonly _mint = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; //moneda que vull mirar en este cas USDC
  private readonly _mint = '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs'; //moneda que vull mirar, Silly Dragon
  private readonly _mint2 = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'; //moneda que vull mirar en este cas USDC

  getAccount(publickey: string | undefined | null) {
    if (!publickey) {
      return of(null);
    }

    const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');

    url.searchParams.set('network', 'mainnet-beta');
    url.searchParams.set('wallet', publickey);
    url.searchParams.set('token', this._mint);

    return this._httpClient
      .get<{
        result: { balance: number; info: { image: string } };
      }>(url.toString(), { headers: this._header })
      .pipe(map((response) => response.result));
  }

  getAccount2(publickey: string | undefined | null) {
    if (!publickey) {
      return of(null);
    }

    const url = new URL('https://api.shyft.to/sol/v1/wallet/token_balance');

    url.searchParams.set('network', 'mainnet-beta');
    url.searchParams.set('wallet', publickey);
    url.searchParams.set('token', this._mint2);

    return this._httpClient
      .get<{
        result: { balance: number; info: { image: string } };
      }>(url.toString(), { headers: this._header })
      .pipe(map((response) => response.result));
  }

  getTransaction(publickey: string | undefined | null) {
    if (!publickey) {
      return of(null);
    }

    const url = new URL(
      'https://api.shyft.to/sol/v1/wallet/transaction_history'
    );

    url.searchParams.set('network', 'mainnet-beta');
    url.searchParams.set('wallet', publickey);
    url.searchParams.set('tx_num', '10');

    return this._httpClient
      .get<{
        result: { timestamp: string; fee: number; fee_payer: string };
      }>(url.toString(), { headers: this._header })
      .pipe(map((response) => response.result));
  }
}
