import React,{useState} from 'react';

const empModel = {name:"",empId:""};
const UserForm =() => {
    const [emp, setEmp] = useState(empModel);
    return(
        <div>
            <div>User Form</div>
            <div>
                <label>Name : </label>
                <input value={emp.name} onChange={(e)=>{setEmp({...emp, name:e.target.value})}} />
            </div>
            <div>
                <label>Employee ID : </label>
                <input value={emp.name} onChange={(e)=>{setEmp({...emp, empId:e.target.value})}} />
            </div>
            
        </div>
        
    )
}
export default UserForm;