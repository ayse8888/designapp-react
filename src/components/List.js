import React, { useState } from 'react'

const List = () => {

   const [data, setData] = useState(["Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros","Cras justo odio"])
        return(
            <ul className="list-group">
            {data.map(listItem => (
                <li class="list-group-item d-flex justify-content-between align-items-center">{listItem}
                    <span class="badge bg-dark text-light">14</span>
                </li>
            ))}
            </ul>
        )
    
}


export default List