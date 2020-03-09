import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
export default class User_test extends Component {
    state = {
        users: [],
        SelectedAnswer: "N"
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({ users }));
    }

    render() {
        const MCQ_queslist = this.state.users.map(MCQ_ques => {
            return (
                <div key={MCQ_ques._id}>
                    <div> Question: {MCQ_ques.MCQ_ques} </div>
                    <div> Option:  </div>
                    {MCQ_ques.MCQ_option.option.map(function (MCQ_option, i) {
                        return <div key={i}>
                            <label>
                                <input type="radio" value={MCQ_option} checked={false} />
                                {MCQ_option}
                            </label>
                        </div>
                    })}
                    <div> Answer: {MCQ_ques.MCQ_Answer} </div>
                </div>
            )
        }
        )
        return (
            <div>
                {MCQ_queslist}
            </div>
        )

    }
}