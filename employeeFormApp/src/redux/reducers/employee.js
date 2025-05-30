import {ACTION_TYPES} from '../constants';


const initState = {
        selectedEmployee:{name:"", empId:""},
        empList:[{name:"AK", empId:"123"}]
}

const employees = (state=initState, action) =>{
    switch(action.type) {
        
        case ACTION_TYPES.UPDATE_EMP :{
            return {...state, empList:action.empList}
            break;
        }
        case ACTION_TYPES.SAVE_EMP:{
            return {...state, empList:[...state.empList, action.data]}
        }
        default :{
            return { ...state}
        }
        
    }

}

export default employees;