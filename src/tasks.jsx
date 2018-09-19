import React, { Component } from 'react'

export default class Tasks extends Component {

    constructor(props) {
        super(props)

        this.props = props
        this.state = { task: "", tasks: [] }

        this.handleAddTask = this.handleAddTask.bind(this)
        this.handleKey = this.handleKey.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.renderRows = this.renderRows.bind(this)
    }

    renderRows() {
        
        const list = this.state.tasks || []

        return list.map(item => (
            <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.val}</td>
            </tr>
        ))
    }

    handleChange(e) {
        this.setState({ task: e.target.value })
    }

    handleKey(e) {
        if (e.which === 13)
            this.handleAddTask()
    }

    handleAddTask() {
    
        if (this.state.task === "")
            return;

        const list = this.state.tasks || []

        list.push({ 
            _id: list.length + 1, 
            val: this.state.task.trim()
        })

        this.setState({ 
            tasks: list, 
            task: "" 
        })
    }

    render() {
        return (
            <div className="container">
                <div className="margin row">
                    <input className="col s11" placeholder="Entre com a task aqui" onChange={this.handleChange} onKeyDown={this.handleKey} type="text" value={this.state.task}/>
                    <button className="btn waves-effect waves-light col s1" onClick={this.handleAddTask}>Add</button>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nº</th>
                                <th>Task</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
