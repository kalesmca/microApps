import {ACTION_TYPES} from '../constants';




export const addEmployee = (data) => {
    return {
        type: ACTION_TYPES.SAVE_EMP,
        data: data,
    }
}