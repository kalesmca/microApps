import React,{useState} from 'react';

import { useSelector } from 'react-redux';

const EmployeeList =() =>{
    // const [empList, setEmpList] = useState([]);
    const empList = useSelector((state)=> state?.employees?.empList);
    return(
        <div>
            <div>Employee list</div>
            <div >
                <ul>
                {
                    empList?.length ? empList.map((emp, index) =>{
                        return(<li>
                            <div>Name : {emp.name}</div>
                            <div>Emloyee ID : {emp.empId}</div>
                        </li>)
                    }) : (<li>No Data Found</li>)
                }
                </ul>
            </div>

        </div>
    )
}
export default EmployeeList;