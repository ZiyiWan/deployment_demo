import axios from "axios";
const baseUrl = "https://fhir.monash.edu/hapi-fhir-jpaserver/fhir";

export async function getPatientList(currentPage: number) {
  const result: any = axios
    .get(
        //`https://hapi.fhir.org/baseR4/Patient?_sort=_id&_format=json&_pretty=true&_getpagesoffset=${currentPage}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
        //"http://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true"
      `https://fhir.monash.edu/hapi-fhir-jpaserver/fhir/Patient?_format=json&_pretty=true&_getpagesoffset=${currentPage}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
    )
    .then((res) => {
      console.log(res.data.entry);
      return res.data.entry;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
//test
export function getPatientsByName(name: string, currentPage: number) {
  const result: any = axios
    .get(
        //`https://hapi.fhir.org/baseR4/Patient?name=${name}&&_getpagesoffset=${currentPage}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
      `https://fhir.monash.edu/hapi-fhir-jpaserver/fhir/Patient?given=${name}&_getpagesoffset=${currentPage}&_count=10&_format=json&_pretty=true&_bundletype=searchset`
    )
    .then((res) => {
      console.log(res.data.entry);
      return res.data.entry;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}

export async function getPatientById(id: any) {
  const result: any = axios
    .get(
        //`https://hapi.fhir.org/baseR4/Patient?_id=${id}&_format=json&_pretty=true`
      `https://fhir.monash.edu/hapi-fhir-jpaserver/fhir/Patient?_id=${id}&_format=json&_pretty=true`
    )
    .then((res) => {
      console.log("Response in Axios:" + res.data.entry);
      return res.data.entry;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}

export function getMedResById(id: any) {
  const result: any = axios
    .get(
        //`https://hapi.fhir.org/baseR4/MedicationRequest?patient=${id}&_format=json&_pretty=true`
      `https://fhir.monash.edu/hapi-fhir-jpaserver/fhir/MedicationRequest?patient=${id}&_format=json&_pretty=true`
    )
    .then((res) => {
      console.log("Response in Axios:" + res);
      console.log(res)
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}

export function getDiaRptById(id: any) {
  const result: any = axios
    .get(
        `http://hapi.fhir.org/baseR4/DiagnosticReport?patient=${id}&_format=json&_pretty=true`
      //`https://fhir.monash.edu/hapi-fhir-jpaserver/fhir/MedicationRequest?patient=${id}&_format=json&_pretty=true`
    )
    .then((res) => {
      console.log("Response in Axios:" + res);
      console.log(res)
      return res;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
}
