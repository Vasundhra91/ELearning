import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
export default class User_test extends Component {
    state = {
        users: [],
        Marks: " ",
        users_answer: [],
        selectedValue:""
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }
    handleSumbmitEvent = (e) => {
        e.preventDefault();
        var a = this.state.users_answer;
        var b = this.state.users;
       
        if (a.length !== b.length)
            this.setState({ Marks: "incorrect format" })
        else {
            var totalmarks = 0;
            for (var i = 0; i < a.length; i++)

                if (a[i][0].MCQ_Answer === b[i].MCQ_Answer && (a[i][0].Ques_id === b[i]._id) )
                    totalmarks++;
        }
        var percent = totalmarks * 100 / a.length;
        if (Math.round(percent) >= 40)
            this.setState({ Marks: "Marks:" + totalmarks + " PASS" })
        else
            this.setState({ Marks: "Marks:" + totalmarks + " FAIL" })

    }

    render() {
        // console.log(this.state.users) 
        
        let Result = ""
        let item = {}
        let jsonObj = [];

        const handleChange = event => {
           this.setState({selectedValue:event.target.value});
            item["Ques_id"] = event.target.id;
            item["MCQ_Answer"] = event.target.value;
            jsonObj.push(item);
            Result = [...this.state.users_answer, jsonObj]
            this.setState({
                users_answer: Result
            })
        };

        const MCQ_queslist = this.state.users.map(MCQ_ques => {
            return (
                <div key={MCQ_ques._id}>
                    <div> Question: {MCQ_ques.MCQ_ques} </div>
                    <div> Option:  </div>
                    {MCQ_ques.MCQ_option.option.map(function (MCQ_option, i) {
                        return <div key={i}>
                            <label>
                                <Radio
                                    checked={this.state.selectedValue === {MCQ_option}}
                                    onChange={handleChange}
                                    id={MCQ_ques._id}
                                    value={MCQ_option}
                                    color="default"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': 'D' }}
                                />
                                {MCQ_option}
                            </label>
                        </div>
                    })}
                </div>
            )
        }
        )
        return (
            
                <form onSubmit={this.handleSumbmitEvent}>
                    <h2>Test Paper</h2>
                    {MCQ_queslist}
                    <h3> {this.state.Marks}</h3>
                    <button type="submit">Submit </button>
                </form>
        )
    }
}