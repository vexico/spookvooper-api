import { EntityUser, ConfigAuth } from './../interfaces/Interfaces'
declare type CreditAmount = string | number
declare type PaymentEntity = string | EntityUser
declare type AuthEntity = EntityUser
declare type GroupMember = string | EntityUser
declare type AuthConfig = ConfigAuth
declare type District = 'Voopmont' | 'New Yam' | 'San Vooperisco' | 'Medievala' | 'Landing Cove' | 'New Spudland' | 'Vooperia City' | 'Corgi' | 'Old Yam' | 'New Vooperis' | 'The Netherlands' | 'Queensland' | 'Servers Past' | 'Los Vooperis' | 'Old King Peninsula'
declare type DistrictWealthType = 'ALL' | 'USER' | 'GROUP'
declare type SenatorDistrict = District | 'ALL'
declare type QueueType = 'BUY' | 'SELL'
export { CreditAmount, PaymentEntity, AuthEntity, GroupMember, AuthConfig, District, DistrictWealthType, SenatorDistrict, QueueType }
