import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { SingUp } from './authenticate.interface'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private readonly backendUrl = 'http://localhost:3000'
  constructor (private readonly httpClient: HttpClient) { }

  protected singUp (singUp: SingUp) {
    /* TODO: Implements type observable */

    return this.httpClient.post<any>(`${this.backendUrl}/signup`, { ...singUp })
  }

  protected singIn (singIn: SingUp) {
    /* TODO: Implements type observable */

    return this.httpClient.post<any>(`${this.backendUrl}/login`, { ...singIn })
  }

  protected me () {
    /* TODO: Implements type observable */
    return this.httpClient.get<any>(`${this.backendUrl}/me`)
  }
}
