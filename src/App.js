import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './component/Plan'
import React, { Component } from 'react'

class App extends Component {
  state = {
    items: [],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  handleDone = id => {
    console.log("Deleted", id);
    const olditems = [...this.state.items];
    const items = olditems.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items })
  }
  
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
            <h2 className='text-center p-3'>Plan Your Day</h2>
            <div className='row'>
              <div className='col-9'>
                <input type="text" className='form-control' placeholder='Add your plans here' value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className='col-2'>
                <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>ADD</button>
              </div>
              <div className='row'>
                <div className='col-3'>
                  <input type="time" id='time' className='form-control' />
                </div>
                <div className='col-3'>
                  <input type="Date" className='form-control' />
                </div>
              </div>
              <div className='container-fluid'>
                <ul className='list-unstyled row m-5'>
                  {
                    this.state.items.map((value, i) => {
                      return <Plan id={i} key={i} value={value} sendData={this.handleDone} />
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
