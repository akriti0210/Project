import React from "react";
import Person from "./Person";

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 25,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 26,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 27,
            skill: 'Vue'
        }
    ]
    //const nameList = names.map(name => <h2>{name}</h2>)
    const personsList = persons.map(person => <Person key={person.id} person={person} />)

    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)
    return (
        <div>
            {
                //responsible for listing
                personsList
            }
        </div>
    )
}

export default NameList