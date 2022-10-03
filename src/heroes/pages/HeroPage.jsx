import { useMemo } from 'react';
import {useNavigate,Navigate,useParams} from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() =>  getHeroById(id), [id]);

  const onNavigateBack = () => {
    //Logica hasta tener mas publishers
    /* navigate((hero.publisher === 'DC Comics') ? ("/dc") : ("/marvel"));*/
    //Logica para ir para atras en el historial
    navigate(-1);
  }

  if(!hero){
    return  <Navigate to="/search"/>
  }

  const heroImgUrl = `/src/assets/heroes/${hero.id}.jpg`

  return (
    <>
        <div className="col animate__animated animate__fadeInRight">
            <div className="mt-5">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImgUrl} className="card-img" alt={hero.superhero}/>
                    </div>
                    <div className="col-8 mt-5">
                        <div className="card-body ms-4">
                            <h4 className="card-tittle fs-1">{hero.superhero}</h4>
                            <hr/>
                            <p className="card-text"><b>Alter ego: </b>{hero.alter_ego}</p>
                            <hr/>
                            <p className="card-text"><b>First Appearance: </b>{hero.first_appearance}</p>
                            <hr/>
                            <p className='card-text'><b>Publisher: </b>{hero.publisher}</p>
                            <hr/>
                            <h4 className='mt-3'>Characters</h4>
                            <p className='card-text'>{hero.characters}</p>

                            <button className='btn btn-outline-danger btn-lg col-2 mt-5' onClick={onNavigateBack}>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
