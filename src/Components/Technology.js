
import { useState } from 'react'
import '../Styles/Technology.css'
import data from '../starter-code/data.json'
export default function Technology() {
    let[Innovation]=useState(data.technology)
    let[value,setvalue]=useState(0)
    let {name,images,description}=Innovation[value]
    return (
        <div className="technology-page">
            <section className="technology-content">
                <h2 className="technology-toptext"><span className="tech-num">03</span>space launch 101</h2>
            <section className="tech-sub">
                <ul className="tech-button-list">
                    <li className="tech-links">
                        {Innovation.map((item,index)=>(
                            <button key={index} className='tech-buttons'onClick={()=>setvalue(index)} >{index}</button>
                        ))}
                    </li>
                </ul>
                  <article className="technology-text">
                      <h3 className="terminology uppercase">the terminology...</h3>
                      <h2 className="tech-name uppercase">{name}</h2>
                      <p className="tech-paragraph">{description}</p>
                  </article>
                  <div className="space-image"><img src={images.portrait} alt={name} className="tech-images" /></div>
            </section>
            </section>
        </div>
    )
}

