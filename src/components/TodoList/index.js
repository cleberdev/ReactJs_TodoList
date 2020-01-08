import React, { Component } from 'react'
import TodoItems from '../TodoItems'

class TodoList extends Component{

    constructor( props ){
        super( props )
        this.state ={
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this)
        this.log = this.log.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e){
        e.preventDefault()

        let state = this.state
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }
            this.setState( {items: [...state.items, newItem]} )
        }
        this.setState({tarefa: ''})
    }

    log(){
        console.log(this.state.items)
    }

    /**
     * - APENAS PARA FINS DIDÁTICOS
     * - Recebe o parâmetro que é uma chave q identifica o registro
     * - filter retorna o mesmo objeto com o item recebido no parâmetro removido
     */
    deleteItem( key ){
        let filtro = this.state.items.filter((item_ID)=>{
            return( item_ID.key !== key )
        })
        this.setState({ items: filtro })
    }


  render(){
    return(
      <div>
         <form onSubmit={ this.addItem }>
             <input 
                type        ="text" 
                placeholder ="Nova Tarefa" 
                name        ="Tarefa" 
                value       ={this.state.tarefa} 
                onChange    ={ (e)=>this.setState({ tarefa: e.target.value })} 
                ref         ={ (event)=> this._tarefaInput = event }/>
                
                <button type="submit"> Adicionar    </button>
                <button onClick={this.log}> Log </button>

         </form>

         <TodoItems lista={ this.state.items } delete={ this.deleteItem }/>
         
      </div>
    )
  }

}

export default TodoList