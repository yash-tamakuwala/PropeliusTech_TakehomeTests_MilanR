export interface DummyApiType {
  application_id: string;
  type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  categories: Categories;
  vehicle_info: VehicleInfo;
  branding: Branding;
}
export interface Categories {
  income: Income;
  insurance: Insurance;
  residence: Residence;
  identity: Identity;
  ssn: Ssn;
  misc: Misc;
}
export interface Income {
  combinatorial_logic: string;
  documents: Documents;
  status: string;
}
export interface Documents {
  paystub: PaystubOrBankStatement;
  ssi_award_letter: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface PaystubOrBankStatement {
  data?: DataEntity[] | null;
  status: string;
}
export interface DataEntity {
  custom_label: string;
  status: string;
}
export interface SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard {
  data?: DataEntity1[] | null;
  status: string;
}
export interface DataEntity1 {
  status: string;
}
export interface Insurance {
  combinatorial_logic: string;
  documents: Documents1;
  status: string;
}
export interface Documents1 {
  insurance_id_card: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface Residence {
  combinatorial_logic: string;
  documents: Documents2;
  status: string;
}
export interface Documents2 {
  bank_statement: PaystubOrBankStatement;
  utility_bill: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface Identity {
  combinatorial_logic: string;
  documents: Documents3;
  status: string;
}
export interface Documents3 {
  passport: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
  driver_license_front: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
  state_id: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface Ssn {
  combinatorial_logic: string;
  documents: Documents4;
  status: string;
}
export interface Documents4 {
  social_security_card: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface Misc {
  combinatorial_logic: string;
  documents: Documents5;
  status: string;
}
export interface Documents5 {
  pan_card: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
  aadhar_card: SsiAwardLetterOrInsuranceIdCardOrUtilityBillOrPassportOrDriverLicenseFrontOrStateIdOrSocialSecurityCardOrPanCardOrAadharCard;
}
export interface VehicleInfo {
  model: string;
  make: string;
  year: number;
  image_url: string;
}
export interface Branding {
  contact_us_link: string;
  name: string;
  address_coordinates: AddressCoordinates;
  privacy_link: string;
  terms_of_service_link: string;
  phone: string;
}
export interface AddressCoordinates {
  lng: number;
  lat: number;
  address: string;
}
