// SpookVooper API - modules/types/Types.ts
// Written by Brendan Lane - https://brndnln.dev/

import { EntityUser, AuthConfig as AuthConfigInt } from './../interfaces/Interfaces'

type CreditAmount = string | number
type PaymentEntity = string | EntityUser
type AuthEntity = EntityUser
type GroupMember = string | EntityUser
type AuthConfig = AuthConfigInt
type District = 'Voopmont' | 'New Yam' | 'San Vooperisco' | 'Medievala' | 'Landing Cove' | 'New Spudland' | 'Vooperia City' | 'Corgi' | 'Old Yam' | 'New Vooperis' | 'The Netherlands' | 'Queensland' | 'Servers Past' | 'Los Vooperis' | 'Old King Peninsula'
type DistrictWealthType = 'ALL' | 'USER' | 'GROUP'
type SenatorDistrict = District | 'ALL'

export {
  CreditAmount,
  PaymentEntity,
  AuthEntity,
  GroupMember,
  AuthConfig,
  District,
  DistrictWealthType,
  SenatorDistrict
}
