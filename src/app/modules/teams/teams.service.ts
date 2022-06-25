import { Create, CreateResponse, Team, UpdateTeam } from './teams.interface'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '../User/User.interface'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private readonly backendUrl = 'http://localhost:3000'

  constructor (private readonly httpClient: HttpClient) {}

  public createTeam (teamData: Create) {
    return this.httpClient.post<CreateResponse>(`${this.backendUrl}/teams`, teamData)
  }

  public onlyOneTeam (teamID: string) {
    return this.httpClient.get<Team>(`${this.backendUrl}/teams/${teamID}`)
  }

  public userTeam () {
    return this.httpClient.get<Array<Team>>(`${this.backendUrl}/users/teams`)
  }

  public teamUsers (id: string) {
    return this.httpClient.get<Array<User>>(`${this.backendUrl}/teams/${id}/users`)
  }

  public updateTeam (teamData: UpdateTeam, teamID: string) {
    return this.httpClient.put<void>(`${this.backendUrl}/teams/${teamID}`, { ...teamData })
  }
}
