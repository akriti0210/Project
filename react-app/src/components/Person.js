import React from "react";

function Person({ person }) {

    return (
        //responsible for rendering person html
        <div>
            <h2>
                {/* key props aren't accessible in child component
                {key}  */}
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person