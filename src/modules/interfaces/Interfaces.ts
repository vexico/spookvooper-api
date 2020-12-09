// SpookVooper API - modules/interfaces/Interfaces.ts
// Written by Brendan Lane - https://brndnln.dev/

export interface EntityUser {
  getUser: () => Promise<any>
  getUsername: () => Promise<any>
  getBalance: () => Promise<any>
  hasDiscordRole: () => Promise<any>
  getDiscordRoles: () => Promise<any>
  sendCredits: () => Promise<any>
  getStockOffers: () => Promise<any>
  buyStock: () => Promise<any>
  sellStock: () => Promise<any>
  svid: string
  apikey: string
}

export interface ConfigUser {
  svid: string
  apikey?: string
}

export interface EntityGroup {
  svid: string
}

export interface AuthConfig {
  clientid: string
  clientsecret: string
}
