declare function getSvidFromUsername (username: string, errToConsole?: boolean): Promise<any>
declare function getUsernameFromDiscord (discordid: string, errToConsole?: boolean): Promise<any>
declare function getSvidFromDiscord (discordid: string, errToConsole?: boolean): Promise<any>
declare function getUsernameFromMinecraft (minecraftid: string, errToConsole?: boolean): Promise<any>
declare function getSvidFromMinecraft (minecraftid: string, errToConsole?: boolean): Promise<any>
export { getSvidFromUsername, getSvidFromMinecraft, getSvidFromDiscord, getUsernameFromDiscord, getUsernameFromMinecraft }
