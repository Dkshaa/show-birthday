const Tour=({id,info,name,image,price})=>{
    return(
        <article className="single-tour">
            <div className="tour-info">
                <img src= {image} alt={name}/>
                <div>
                    <h2>{name}</h2>
                    <h2>$ {price}</h2>
                </div>
                
            </div>

        </article>
    )
}
export default Tour