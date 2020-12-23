import React, { Component } from 'react'

class List extends Component {

    state ={
        listItems : ["Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac","Vestibulum at eros","Cras justo odio"],
    }

    render(){
        return(
            <ul className="list-group">
            {this.state.listItems.map(listItem => (
                <li class="list-group-item d-flex justify-content-between align-items-center">{listItem}
                    <span class="badge bg-dark rounded-pill">14</span>
                </li>
            ))}
            </ul>
        )
    }
    
}

export default List