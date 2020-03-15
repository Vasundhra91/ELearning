import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
export default class User_paper extends Component {
    state = {
        testpaper: [],
        Ques_id: ""
    }

    componentDidMount() {
        fetch('/users/AdminTestPaper')
            .then(res => res.json())
            .then(testpaper => this.setState({ testpaper }));
    }
    handleSumbmitEvent = (e) => {
        e.preventDefault();
        this.setState({ Ques_id: e.target.id })
    }
    render() {
        var count = 0;
        if (this.state.Ques_id!=="") {
            return (
            <Redirect to={{
                pathname: '/User_test',
                state: { id: this.state.Ques_id }
            }}/>
            )
        }
        else {
            return (
                this.state.testpaper.map(MCQ_ques => {
                    count++;
                    return (
                        <div key={MCQ_ques._id}>
                            <button type="submit" id={MCQ_ques._id} onClick={this.handleSumbmitEvent}> Test Paper: {count} </button>
                        </div>)
                } ))
        }
    }

}