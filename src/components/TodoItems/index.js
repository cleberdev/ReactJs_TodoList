import React, { Component } from 'react'
import TodoList from '../TodoList';

class TodoItems extends Component{
        constructor( props ){
            super( props )
            this.state = { }

            this.delete = this.delete.bind(this)
        }

        
        delete( key ){
            this.props.delete( key )
        }


    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>Key</th>
                        <th>Text</th>
                    </tr>
                    { this.props.lista.map((item)=>{
                        return(
                            <tr onClick={ ()=>this.delete( item.key )} key={ item.key  }>
                                <td>  { item.key  } </td>
                                <td>  { item.text  } </td>
                            </tr>
                        )
                    }) }
                    
                </table>
            </div>
        )
    }
}

export default TodoItems