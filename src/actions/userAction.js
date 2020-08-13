export const FETCH_CORE_DETAILS = "FETCH_CORE_DETAILS";
export const FETCH_BUSINESS_DETAILS = "FETCH_BUSINESS_DETAILS";
export const SET_LINE_OF_BUSINESS_DETAILS = "SET_LINE_OF_BUSINESS_DETAILS";
export const SET_ADD_LEGAL_ENTITY_DETAILS = "SET_ADD_LEGAL_ENTITY_DETAILS";
export const SET_ADD_INVOICE_REMIT_DETAILS = "SET_ADD_INVOICE_REMIT_DETAILS";
export const SET_ADD_EDI_REGISTRATION_DETAILS = "SET_ADD_EDI_REGISTRATION_DETAILS";

export function setName(name){
    console.log("Redux",name);
    return {
        type: "SET_NAME",
        payload: new Promise((resolve,reject) =>{
            setTimeout(()=>{
                console.log("Redux",name);
                resolve(name);
            },2000)
        })
    }
}

// export function setAge(age){
//     return {
//         type: "SET_AGE",
//         payload: age
//     }
// }
// abu
export function carrierNext(obj){
    return {
        type: FETCH_CORE_DETAILS,
        payload: obj
    }
}

export function businessDetailsNext(obj){
    return {
        type: FETCH_BUSINESS_DETAILS,
        payload: obj
    }
}

export function lineOfBusinessNext(obj){
    return {
        type: SET_LINE_OF_BUSINESS_DETAILS,
        payload: obj
    }
}

export function addLegalEntityNext(obj){
    return {
        type: SET_ADD_LEGAL_ENTITY_DETAILS,
        payload: obj
    }
}

export function addInvoiceRemitNext(obj){
    return {
        type: SET_ADD_INVOICE_REMIT_DETAILS,
        payload: obj
    }
}

export function addEdiRegistrationNext(obj){
    return {
        type: SET_ADD_EDI_REGISTRATION_DETAILS,
        payload: obj
    }
}