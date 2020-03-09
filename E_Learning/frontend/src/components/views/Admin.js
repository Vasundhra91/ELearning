import React, { useState } from 'react'
import ViewAddMCQGrid from "./ViewAddMCQGrid.js";
import MCQ_AddQues from "./AddQues.js";
class Admin extends React.Component {
    state={
        MCQ_ques :[],
        setSubmit:[],
        labelmsg:""
        }

    AddMCQDetails = (Questext) => { //add input id
        Questext.id = Math.random();
        // add all value in Array
        let ques = [...this.state.MCQ_ques, Questext]
        this.setState({
            MCQ_ques: ques
        })
      
    }
    DeleteMCQ_ques = (id) => {
        let MCQ_ques = this.state.MCQ_ques.filter(maap => {
            return maap.id !== id
        })
        this.setState({
            MCQ_ques: MCQ_ques
        })
    }

    handleAddtoDb = (e) => {
        e.preventDefault();
        fetch('/users/Admin', {
            method: 'POST',
            body: JSON.stringify(this.state.MCQ_ques),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .then(setSubmit => this.setState({ setSubmit }))
        .catch(error => console.error('Error:', error))  
        e.target.reset();
    }
    render() {
        return (
            <div className="App">
                <h2>MCQ</h2>
                <label id="lbl_success" value={this.state.labelmsg}></label>
                <MCQ_AddQues AddDetails ={this.AddMCQDetails} />
                <ViewAddMCQGrid MCQ_quesdetails={this.state.MCQ_ques} DeleteMCQ_quesdetails={this.DeleteMCQ_ques} />
                <form onSubmit={this.handleAddtoDb}>
                <button type="submit">SAVE</button>
                </form>
            </div>
        );
    }
}
export default Admin