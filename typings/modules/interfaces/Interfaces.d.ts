export interface EntityUser {
  svid: string
  getUser: () => Promise<any>
  getUsername: () => Promise<any>
  getBalance: () => Promise<any>
  hasDiscordRole: () => Promise<any>
  getDiscordRoles: () => Promise<any>
  sendCredits: () => Promise<any>
  getStockOffers: () => Promise<any>
  buyStock: () => Promise<any>
  sellStock: () => Promise<any>
  setApiKey: () => void
  setSvid: () => void
}

export interface ConfigUser {
  svid: string
  apikey?: string
}
export interface EntityGroup {
  svid: string
}
