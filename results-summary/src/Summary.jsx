import React from 'react'
import {personalData} from "./data"

const Summary = () => {
  return (
    <section className="summary">
        <h2>Summary</h2>
            {personalData.map((data, index) => {
                return (
                    <div className='summaryItem' id={data.category} key={index}>
                        <div className='category'>
                            <img src={data.icon} alt={data.category} />
                            <h3>{data.category}</h3>
                        </div>
                        <p>{data.score}<span>/100</span></p>
                    </div>
                )
            })}
            <div className='continue'><p>Continue</p></div>
    </section>
  )
}

export default Summary