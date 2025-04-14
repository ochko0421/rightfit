import People from '../Const/People.json';


export default function Section() {



    return (
        <div className='people-container'>
            <h1 id="team" className='title'>Our team</h1>
            <section className="people-section">

                {People.map((person, index) => (

                    <div className={`people`} key={index}>
                        <img src={person.image} alt={person.name} />
                        <div className={`${index !== 4 ? 'people-name' : 'person-name'}`}>{person.name}</div>
                        <div className={`${index !== 4 ? 'people-title' : 'person-title'}`}>{person.title}</div>
                        <div className={`${index !== 4 ? 'people-desc' : 'person-desc'}`}>{person.description}</div>

                    </div>

                )


                )}
            </section>
        </div>

    )
}