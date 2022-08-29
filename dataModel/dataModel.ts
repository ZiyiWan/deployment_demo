//pending
export interface PatientData {
    name: any,
    birthDate: string,
    address: string,
    gender: string,
    telecom:string,
    meta:{lastUpdated:string}
}

export interface NameModel{
    family:string,
    given:[],
    prefix:[],
}