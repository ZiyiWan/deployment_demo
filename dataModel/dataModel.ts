//pending
export interface PatientData {
  name: any;
  birthDate: string;
  address: string;
  gender: string;
  telecom: string;
  meta: { lastUpdated: string };
}

export interface NameModel {
  family: string;
  given: [];
  prefix: [];
}

export default interface patientInfo {
  DOB: string;
  city: string;
  country: string;
  email: string;
  firstname: string;
  gender: string;
  lastname: string;
  line1: string;
  phonenum: string;
  postal: string;
  state: string;
}
