import React, { useState } from 'react';
import '../App.css';




const Folder = props => {
     const [expand, setExpand] = useState(false);
    const { data } = props;
    const handleExpandFolder = () =>{
        setExpand(!expand)
    }

 if(data.isFolder){
    return(
        <div>
            <div className='folder'>
            <span onClick={handleExpandFolder}>🗂️{data.name}</span>
            </div>
            {expand&& 
            data.items.map((exp)=>{
                    return <Folder  key={exp.id}data={exp} />
                })
            }
           




        </div>


    )

 }
 else{
    return(
        <div className='files'>
            <span>📄{data.name}</span>
        </div>
    )
 }
}




export default Folder;