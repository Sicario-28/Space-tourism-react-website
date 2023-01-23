
import '../Styles/Crew.css'
import data from '../starter-code/data.json'
import { useState } from 'react'

export default function Crew() {
    let[Info]=useState(data.crew)
    let[value,setvalue]=useState(0)
    let{name,images,role,bio}=Info[value]
    return (
        <div className="crew-page">
            <section className="crew-content">
            <article className="crew-info">
                <h2 className="crew-toptext"><span className='crew-num'>02</span>Meet your crew</h2>
                <h2 className="crew-role">{role}</h2>
                <h1 className="crew-name">{name}</h1>
                <p className="crew-bio">{bio}</p>
                {Info.map((item,index)=>
                    (<button className='round-links' key={index} onClick={()=>setvalue(index)}></button>)
                    )}
                </article>
                <footer className="bottom-image">
                <img src={images.png} alt={name} className="crew-image" />
                </footer>
            </section>
        </div>
    )
}
