import React, {createContext, useState } from "react";
import Contex1 from "../Componen/Contex1";
import Contex2 from "../Componen/Contex2";

export const MyContext = createContext()

const UseContex = () => {
    const [data,setData] = useState(0)
    return ( 
        <div className="mx-auto text-center w-1/2 mt-8">
            {data}
            <div className="mt-8">
                <MyContext.Provider value={[data, setData]}>
                    <Contex1/><hr />
                    <Contex2/>
                </MyContext.Provider>
            </div>
        </div>
     );
}
 
export default UseContex;