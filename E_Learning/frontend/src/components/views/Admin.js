import React, { useState } from 'react'
import ViewAddMCQGrid from "./ViewAddMCQGrid.js";
import MCQ_AddQues from "./AddQues.js";
class Admin extends React.Component {
    state={
        MCQ_ques :[],
        setSubmit:false
        }

    AddMCQDetails = (Questext) => { //add input id
        Questext.id = Math.random();
        // add all value in Array
        let ques = [...this.state.MCQ_ques, Questext]
        console.log(JSON.stringify(ques))
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
            body: this.state.MCQ_ques,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
            .then( this.setState({ setSubmit: true }))

        e.target.reset();
    }
    render() {
        return (
            <div className="App">
                <h2>MCQ</h2>
                <ViewAddMCQGrid MCQ_quesdetails={this.state.MCQ_ques} DeleteMCQ_quesdetails={this.DeleteMCQ_ques} />
                <MCQ_AddQues AddDetails ={this.AddMCQDetails} />
                <form onSubmit={this.handleAddtoDb}>
                <button type="submit">SAVE</button>
                </form>
            </div>
        );
    }
}
export default Admin