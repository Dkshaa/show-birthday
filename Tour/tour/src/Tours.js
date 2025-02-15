import Tour from "./Tour"

const Tours=({tours})=>{
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            {tours.map((tour)=>{
                return(
                    <Tour key={tour.id} {...tour}/>
                )
            })}
        </section>
    )
}
export default Tours