import {FETCH_CORE_DETAILS} from '../actions/userAction';
import {FETCH_BUSINESS_DETAILS} from '../actions/userAction';
import {SET_LINE_OF_BUSINESS_DETAILS} from '../actions/userAction';
import {SET_ADD_LEGAL_ENTITY_DETAILS} from '../actions/userAction';
import {SET_ADD_INVOICE_REMIT_DETAILS} from '../actions/userAction';
import {SET_ADD_EDI_REGISTRATION_DETAILS} from '../actions/userAction';

const userReducer = (state = { documents:{
                                carrierDetails : [{name: "Task 1"}],
                                // businessDetails : [{ indvButton: true, exchButton: false,
                                //  offExchButton: true, groupButton: true,carrierCode: "CC",
                                //  grpCarrierCode: "GC"
                                //     }],
                                businessDetails : [],
                                lineofBusiness : [],
                                legalEntity : [],
                                invoiceRemitTo : [],
                                eDIRegistration : [] }
}, action) => {
    switch (action.type) {

        case FETCH_CORE_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    carrierDetails: [...state.documents.carrierDetails, {name:action.payload}]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;
        
        case FETCH_BUSINESS_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    businessDetails: [...state.documents.businessDetails, { indvButton:action.payload.indvButton, exchButton:action.payload.exchButton,
                        offExchButton:action.payload.offExchButton, groupButton:action.payload.groupButton,carrierCode:action.payload.carrierCode,
                        grpCarrierCode:action.payload.grpCarrierCode
                    }]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;

        case SET_LINE_OF_BUSINESS_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    lineofBusiness: [...state.documents.lineofBusiness, { indvOnButton: action.payload.indvOnButton, indvOffButton: action.payload.indvOffButton,
                        indvGrpButton: action.payload.indvGrpButton, LineOfBussiness: action.payload.LineOfBussiness,states: action.payload.states,
                        ProductType :action.payload.ProductType
                    }]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;

        case SET_ADD_LEGAL_ENTITY_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    legalEntity: [...state.documents.legalEntity, { LegalEntityName: action.payload.LegalEntityName, options : action.payload.options, Address1 : action.payload.Address1 , Address2 : action.payload.Address2 , 
                        City : action.payload.City , stateSelected : action.payload.stateSelected , ZipCode : action.payload.ZipCode, PhoneNumber : action.payload.PhoneNumber , Email : action.payload.Email , 
                        BankName : action.payload.BankName , AccNo : action.payload.AccNo, BankNoCode : action.payload.BankNoCode ,  BatchComId : action.payload.BatchComId ,
                        BatchComName : action.payload.BatchComName , BatchDes : action.payload.BatchDes , TypeCode : action.payload.TypeCode , CarrierAccInd : action.payload.CarrierAccInd
                    }]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;

        case SET_ADD_INVOICE_REMIT_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    invoiceRemitTo: [...state.documents.invoiceRemitTo, { LegalEntityName: action.payload.LegalEntityName
                    }]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;

        case SET_ADD_EDI_REGISTRATION_DETAILS:
            state = {
                ...state,
                documents: {
                    ...state.documents,
                    eDIRegistration: [...state.documents.eDIRegistration, { LegalEntityName: action.payload.LegalEntityName
                    }]
                }
            }
        Object.assign({}, state);
        console.log("state",state);
        break;

        case "SET_NAME_FULFILLED":
            state = {
                ...state,
                name: action.payload
            }
            break;

        default:
            break;

    }
    return state;
}
export default userReducer;