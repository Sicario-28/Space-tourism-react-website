
import '../Styles/Destination.css'
import { NavLink } from 'react-router-dom'
import data from '../starter-code/data.json'
import { useState } from 'react'

export default function Destination() {
    let [bodies]=useState(data.destinations)
    let[value,setvalue]=useState(0)

    let {name,description,images,distance,travel}=bodies[value]
    return (
        <div className="destination-page">
            <section className="destination-content">
                 <article className="destination-left">
                     <h2 className="destination-toptext"><span className="des-num">01</span>pick your destination </h2>
                                     <img src={images.webp} alt={name} className="image" />
                 </article>
                 <article className="destination-right">
                     <nav className="destination-nav">
                     
                             {bodies.map((item,index)=> (
                                <button className='solar-links' key={index} onClick={()=>{setvalue(index)}}>{item.name}</button>
                             ))}
                     
                     </nav>
                      <h2 className="destination-name ">{name}</h2>
                      <p className="destination-description">{description}</p>
                               <hr className='horizontal' />
                                   <footer className="destination-footer">
                      <article>
                          <p className="destination-distance uppercase opaque">AVG. DISTANCE</p> <span className='the-distance footer-style visibility'>{distance}</span>
                      </article>
                      <article>
                          <p className="destination-travel uppercase opaque">EST. TRAVEL TIME</p> <span className='the-travel footer-style visibility'>{travel}</span>
                      </article>
                                   </footer>
                 </article>
            </section>
        </div>
    )
}


