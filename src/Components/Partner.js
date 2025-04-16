import Partners from '../Const/Partners.json';

export default function Partner() {
    return (<div >
        <div className='partner-container padding-50'>
            <div className='title '>
                Let's make high-quality
                <br /> orthotics accessible to all,<br /> together.
            </div>

        </div>
        <h1 className='title padding-50' id='partner'>Our partners</h1>
        <section className="partner-section padding-50" >

            {Partners.map((partner, index) => (

                <div className="partner" key={index}>
                    <img className='partner-image' src={partner.image} alt={partner.name} width={partner.width} height={partner.height} />

                    <div className="partner-title">{partner.title}</div>
                    <div className="partner-desc">{partner.description}</div>

                </div>

            )


            )}
        </section>
    </div>)
}