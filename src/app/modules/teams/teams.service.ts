import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

type Team = {
  name: string
}

type UpdateTeam = {
  id: string
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly backendUrl = 'http://localhost:3000'

  constructor (private readonly httpClient: HttpClient) {}

  public createTeam (teamData: Team) {
    /* TODO: Implements obeservable type */
    return this.httpClient.post<any>(`${this.backendUrl}/teams`, teamData)
  }

  public onlyOneTeam (teamID: string) {
    /* TODO: Implements obeservable type */
    return this.httpClient.get<any>(`${this.backendUrl}/teams/${teamID}`)
  }

  public userTeam () {
    /* TODO: Implements obeservable type */
    return this.httpClient.get<any>(`${this.backendUrl}/users/teams`)
  }

  public teamUsers (id: string) {
    /* TODO: Implements obeservable type */
    return this.httpClient.get<any>(`${this.backendUrl}/teams/${id}/users`)
  }

  public updateTeam (teamData: UpdateTeam) {
    /* TODO: Implements obeservable type */
    return this.httpClient.put<any>(`${this.backendUrl}/teams/${teamData.id}`, { ...teamData })
  }

  public generateTeamInvite (teamID: string) {
    /* TODO: Implements obeservable type */
    return this.httpClient.post<any>(`${this.backendUrl}/teams-invites/${teamID}/generate`, {})
  }

  public useTeamInvite (secretInvite: string) {
    /* TODO: Implements obeservable type */
    return this.httpClient.post<any>(`${this.backendUrl}/teams-invites/${secretInvite}`, {})
  }
}
