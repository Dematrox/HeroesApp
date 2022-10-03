import { useNavigate, useLocation } from 'react-router-dom'
import querystring from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components"
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = querystring.parse(location.search);

    const heroes = getHeroesByName(q);

    const {searchText, onInputChange} = useForm({
      searchText: q
    });

    const onSearchSubmit = (e) => {
      e.preventDefault();

      // if(searchText.trim().length <= 2) return;

      navigate(`?q=${searchText}`)
    }

    return (
      <>
      <h1>Search</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={ onSearchSubmit }>
            <input type="text" placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange}/>

            <button className="btn btn-danger mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr/>

          {(q === '') ? <div className="alert alert-success me-2"> Search a Hero </div> : (heroes.length === 0) && <div className="alert alert-danger me-2"> No hero with {q}</div>}

          { heroes.map( hero => (
            <HeroCard key={hero.id} {...hero}/>
          )) }

        </div>
      </div>
      </>
    )
  }
  
