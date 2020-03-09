import React from 'react';
import Grid from '@material-ui/core/Grid';
class  AddQuestion extends React.Component {
    state = {
        MCQ_option: [],
        MCQ_ques: [],
        MCQ_Answer: [],
        Ques_id:Math.random()
    }

    handleEvent= (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSumbmitEvent = (e) => {
        e.preventDefault();
        var data1="";
        if (this.state.MCQ_option !== "" && this.state.MCQ_ques !== ""){
        var optionid=  this.state.MCQ_option.split(',');
        var MCQ_queslist=''
        for (var i = 0; i < optionid.length; i++) {
            MCQ_queslist = '"'+optionid[i]+'"'+','+ MCQ_queslist
        }
        console.log(MCQ_queslist)
         data1 = '{"Ques_id":' + '"'+this.state.Ques_id+'"'+ ',"MCQ_Answer":' + '"'+this.state.MCQ_Answer+'"'+ ',"MCQ_ques":' + '"'+this.state.MCQ_ques+'"'+ ',"MCQ_option":{"option":[ '+ MCQ_queslist + '""]}}';
         this.props.AddDetails(JSON.parse(data1))
        e.target.reset();
        this.setState({
            MCQ_option: "",
            MCQ_ques:"",
            MCQ_Answer:""
        })
    }
    }

    render() {
        return (
            <form onSubmit={this.handleSumbmitEvent}>
                <label>Question
                <textarea type="text" id="MCQ_ques" onChange={this.handleEvent}></textarea></label>
                <label>Option
                <textarea type="text" id="MCQ_option" onChange={this.handleEvent}></textarea></label>
                <label>Answer
                <textarea type="text" id="MCQ_Answer" onChange={this.handleEvent}></textarea></label>
                <button type="submit">Add Ques. </button>
            </form>
        )
    }
}

export default AddQuestion;
