const People=({people})=>{
    return(
        <>
        {people.map((peop)=>{
            const{id,name,age,image}=peop
            return(
                <article key={id} className='person'>
                    <img src={image} alt={name}/>
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
                    
                </article>

            )
        })}
        </>
    )
}
export default People