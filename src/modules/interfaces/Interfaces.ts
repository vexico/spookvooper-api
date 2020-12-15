// SpookVooper API - modules/interfaces/Interfaces.ts
// Written by Brendan Lane - https://brndnln.dev/

interface EntityUser {
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

interface ConfigUser {
  svid: string
  apikey?: string
}

interface EntityGroup {
  svid: string
}

interface AuthConfig {
  clientid: string
  clientsecret: string
}

interface ReturnedUser {
  userName: string
  twitch_id: string | null
  discord_id: number | null
  post_likes: number
  comment_likes: number
  nationstate: string | null
  description: string | null
  api_use_count: number
  minecraft_id: string | null
  twitch_last_message_minute: number
  twitch_message_xp: number
  twitch_messages: number
  discord_commends: number
  discord_commends_sent: number
  discord_last_commend_hour: number
  discord_last_commend_message: number
  discord_message_xp: number
  discord_message_count: number
  discord_last_message_minute: number
  discord_warning_count: number
  discord_ban_count: number
  discord_kick_count: number
  discord_game_xp: number
  district: string | null
  id: string
  name: string
  credits: number
  image_Url: string | null
}

export {
  EntityUser,
  EntityGroup,
  ConfigUser,
  AuthConfig,
  ReturnedUser
}
