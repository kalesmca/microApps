import React,{useState} from 'react';

const EmployeeList =() =>{
    const [empList, setEmpList] = useState([]);
    return(
        <div>
            <div>Employee list</div>
            <div >
                <ul>
                {
                    empList?.length ? empList.map((emp, index) =>{
                        return(<li>
                            <div>Name : {emp.name}</div>
                            <div>Name : {emp.empId}</div>
                        </li>)
                    }) : (<li>No Data Found</li>)
                }
                </ul>
            </div>

        </div>
    )
}
export default EmployeeList;