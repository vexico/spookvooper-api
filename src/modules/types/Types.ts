// SpookVooper API - modules/types/Types.ts
// Written by Brendan Lane - https://brndnln.dev/

import { EntityUser, ConfigAuth } from './../interfaces/Interfaces'

type CreditAmount = string | number
type PaymentEntity = string | EntityUser
type SvidType = 'user' | 'group' | 'item'
type GroupMember = string | EntityUser
type AuthConfig = ConfigAuth
type District = 'Voopmont' | 'New Yam' | 'San Vooperisco' | 'Medievala' | 'Landing Cove' | 'New Spudland' | 'Vooperia City' | 'Corgi' | 'Old Yam' | 'New Vooperis' | 'The Netherlands' | 'Queensland' | 'Servers Past' | 'Los Vooperis' | 'Old King Peninsula'
type DistrictWealthType = 'ALL' | 'USER' | 'GROUP'
type SenatorDistrict = District | 'ALL'
type QueueType = 'BUY' | 'SELL'

export {
  CreditAmount,
  PaymentEntity,
  SvidType,
  GroupMember,
  AuthConfig,
  District,
  DistrictWealthType,
  SenatorDistrict,
  QueueType
}
