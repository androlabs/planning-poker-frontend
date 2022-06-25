import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Invite } from './invite.interface'

@Injectable({
  providedIn: 'root'
})
export class InviteService {
  private readonly backendUrl = 'http://localhost:3000'

  constructor (private readonly httpClient: HttpClient) {}

  public generateTeamInvite (teamID: string) {
    return this.httpClient.post<Invite>(`${this.backendUrl}/teams-invites/${teamID}/generate`, {})
  }

  public useTeamInvite (secretInvite: string) {
    /* TODO: Implements obeservable type */
    return this.httpClient.post<any>(`${this.backendUrl}/teams-invites/${secretInvite}`, {})
  }
}
