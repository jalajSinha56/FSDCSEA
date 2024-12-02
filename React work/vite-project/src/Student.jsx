import React from 'react'
import './student.css'

function Student({data}) {
  return (
    <div className = 'icard'>
        <table border = '3'>
            <tbody>
                <tr style={{backgroundColor:'cyan'}}><td colSpan={2}>{data.college}</td>
                <tr><td colspan={2}><img src = {data.pic} /></td></tr>
                <tr><th>Name:</th><td>{data.name}</td></tr>
                <tr><th>Roll_Number:</th><td>{data.roll}</td></tr>
                <tr><th>Branch:</th><td>{data.branch}</td></tr>
                <tr><th>Section:</th><td>{data.section}</td></tr>
                </tr>
            </tbody>
        </table>
        {/* {
        JSON.stringify(data)
        } */}
    </div>
  )
}

Student.defaultProps={
  college:"AKG Engineering College"
}

export default Student