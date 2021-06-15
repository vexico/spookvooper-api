import { District as DistrictType, DistrictWealthType, SenatorDistrict } from './types/Types'
import { ReturnedUser } from './interfaces/Interfaces'

declare class District {
  private readonly districtName
  get name (): DistrictType;
  set name (name: DistrictType);
  constructor (name: DistrictType);
  getWealth (type: DistrictWealthType): Promise<number>;
  getSenator (district?: SenatorDistrict): Promise<ReturnedUser>;
}
export default District
