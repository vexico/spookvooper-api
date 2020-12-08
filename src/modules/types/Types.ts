// SpookVooper API - modules/types/Types.ts
// Written by Brendan Lane - https://brndnln.dev/

import { EntityUser } from './../interfaces/Interfaces'

export type CreditAmount = string | number
export type PaymentEntity = string | EntityUser
export type SVStockTicker = 'B' | 'IDE' | 'NEWS' | 'POT' | 'TECH' | 'TYCO' | 'VC' | 'VNB' | 'VU' | 'X'
