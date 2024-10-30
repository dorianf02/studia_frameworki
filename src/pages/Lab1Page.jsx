import {data} from '../data/module-data'
const NameItem = ({id,name}) => <li key={id}>{name}</li>;

function Lab1Page() {
    return(
        <>
        <h1>Laboratorium 1</h1>
        <ol>
            {data.map((person, i) => (
                <NameItem name={person.name} id={person.id} key={i} />
            ))}
        </ol>
        </>
    );
}

export default Lab1Page