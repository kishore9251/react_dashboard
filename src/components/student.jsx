import { ReactPropTypes } from "react";
export const Student =(props)=>{
    return(
        <>
        <div className="student">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{props.name}</td>
                    </tr>

                    <tr>
                        <th>Age</th>
                        <td>{props.age}</td>
                    </tr>

                    <tr>
                        <th>martialstatus</th>
                        <td>{props.martialstatus ?"yes i am married" : "no i am not married"}</td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
        
        
        
        
        
        </>
    );
};
Student.defaultprops={
    name:"sara",
    age: 0,
    martialstatus:false,
}

