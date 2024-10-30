import {useParams} from 'react-router-dom';
import {data} from '../data/module-data'
// function PeoplePage() {
//     const { id } = useParams();
//     console.log(id);
//     console.log(data.at(id));
//     return(
//         <>
//         <h1>Szukane imię</h1>
//         <p>{data.at(id) ? data.at(id) : <span>Brak takiego imienia</span>}</p>
//         </>
//     );
// }

// export default PeoplePage;

function PeoplePage() {
    const { id } = useParams();
    const person = data.find(p => p.id === Number(id));
  
    return (
      <>
        <h1>Szukane imię</h1>
        {person ? (
          <div>
            <p>Id: {person.id}</p>
            <p>Name: {person.name}</p>
            <p>Birth: {person.birth}</p>
            <p>Eyes: {person.eyes}</p>
          </div>
        ) : (
          <span>Brak takiego imienia</span>
        )}
      </>
    );
  }
  
  export default PeoplePage;