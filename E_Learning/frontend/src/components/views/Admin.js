import React , { useState }from 'react'
//import Maapform from './RangeCircleform'
export default function Home() {
    const [firstName, setfirstName] =useState("");// useState(this.props.location.state.Name);
    const [lastName, setlastName] = useState("");
    return (
        <div>
        <h3>welcome to admin</h3> {firstName}
        </div>
        )
    }