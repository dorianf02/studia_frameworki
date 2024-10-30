import { data } from "../data/module-data";
import { useParams } from "react-router-dom"

function Lab2Page() {
    const {id} = useParams();
    if (!id) {
        return <h1>Brak identyfikatora osoby</h1>
    }
    const person = data.find(person => person.id === parseInt(id));

    if (!person) {
        return <h1>Nie znaleziono osoby o tym identyfikatorze</h1>;
    }

    return (
        <div>
            <h1>Profil osoby o id nr {person.id}:</h1>
            <p>Imie: {person.name}</p>
            <p>Data urodzenia: {person.birth}</p>
            <p>Kolor oczu: {person.eyes}</p>
        </div>
    );

}

export default Lab2Page