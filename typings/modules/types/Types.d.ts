import { ConfigAuth, EntityUser } from '../interfaces/Interfaces'

declare type CreditAmount = string | number
declare type PaymentEntity = string | EntityUser
declare type SvidType = 'user' | 'group' | 'item'
declare type GroupMember = string | EntityUser
declare type AuthConfig = ConfigAuth
declare type District = 'Voopmont' | 'New Yam' | 'San Vooperisco' | 'Medievala' | 'Landing Cove' | 'New Spudland' | 'Vooperia City' | 'Corgi' | 'Old Yam' | 'New Vooperis' | 'The Netherlands' | 'Queensland' | 'Servers Past' | 'Los Vooperis' | 'Old King Peninsula'
declare type DistrictWealthType = 'ALL' | 'USER' | 'GROUP'
declare type SenatorDistrict = District | 'ALL'
declare type QueueType = 'BUY' | 'SELL'
export { CreditAmount, PaymentEntity, SvidType, GroupMember, AuthConfig, District, DistrictWealthType, SenatorDistrict, QueueType }
