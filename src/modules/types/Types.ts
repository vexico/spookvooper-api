// SpookVooper API - modules/types/Types.ts
// Written by Brendan Lane - https://brndnln.dev/

import { EntityUser, AuthConfig as AuthConfigInt } from './../interfaces/Interfaces'

export type CreditAmount = string | number
export type PaymentEntity = string | EntityUser
export type SVStockTicker = 'B' | 'IDE' | 'NEWS' | 'POT' | 'TECH' | 'TYCO' | 'VC' | 'VNB' | 'VU' | 'X'
export type AuthEntity = EntityUser
export type GroupMember = string | EntityUser
export type AuthConfig = AuthConfigInt
