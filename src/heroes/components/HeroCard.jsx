import { Link } from "react-router-dom"

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) =>{

    const heroImgUrl = `src/assets/heroes/${id}.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImgUrl} className="card-img" alt={superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-tittle">{superhero}</h4>
                            <p className="card-text">{alter_ego}</p>
                            {(characters !== alter_ego) && (<p>{characters}</p>)}
                            <p className="card-text"><small className="text-muted">{first_appearance}</small></p>

                            <Link to={`/hero/${id}`}>Mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
