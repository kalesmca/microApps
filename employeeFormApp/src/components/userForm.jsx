import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addEmployee} from '../redux/actions/employee';

const empModel = {name:"",empId:""};
const UserForm =() => {
    const [emp, setEmp] = useState(empModel);
    const empState = useSelector((state) => state)
      const dispatch = useDispatch()

    const saveEmp =()=>{
        dispatch(addEmployee(emp));
        setEmp(empModel);
    }
    return(
        <div>
            <div>User Form</div>
            <div>
                <label>Name : </label>
                <input value={emp.name} onChange={(e)=>{setEmp({...emp, name:e.target.value})}} />
            </div>
            <div>
                <label>Employee ID : </label>
                <input value={emp.empId} onChange={(e)=>{setEmp({...emp, empId:e.target.value})}} />
            </div>
            <div>
                <button onClick={()=>{saveEmp()}}>Save</button>
            </div>
            
        </div>
        
    )
}
export default UserForm;