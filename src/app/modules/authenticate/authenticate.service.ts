import { MeResponse, SingIn, SingInResponse, SingUp, SingUpResponse } from './authenticate.interface'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private readonly backendUrl = 'http://localhost:3000'
  constructor (private readonly httpClient: HttpClient) { }

  protected singUp (singUp: SingUp) {
    return this.httpClient.post<SingUpResponse>(`${this.backendUrl}/signup`, { ...singUp })
  }

  protected singIn (singIn: SingIn) {
    return this.httpClient.post<SingInResponse>(`${this.backendUrl}/login`, { ...singIn })
  }

  protected me () {
    return this.httpClient.get<MeResponse>(`${this.backendUrl}/me`)
  }
}
