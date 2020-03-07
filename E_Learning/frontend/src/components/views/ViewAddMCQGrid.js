import React from 'react';
    const MCQ_Function = ({MCQ_quesdetails, DeleteMCQ_quesdetails })=> {
    const MCQ_queslist= MCQ_quesdetails.map(MCQ_ques=>{
     return (
    <div key={MCQ_ques.id}>
     
     <div> Question: {MCQ_ques.MCQ_ques} </div>
     <div> Option:  </div>
     {MCQ_ques.MCQ_option.option.map(function (MCQ_option, i) { 
												return <div key={i}>
													<span>{MCQ_option}</span>
												</div>
											})}



     
     <button onClick={()=>{DeleteMCQ_quesdetails(MCQ_ques.id)} }> Delete Item </button>
    </div>
     )}
    )
    return(
      <div>
        {MCQ_queslist }
      </div>
    )

}
export default MCQ_Function;