import React from "react";

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline(props) {

    return (
        <div>
            {/* module.css can't be used inside the child component
            as the class name is referenced using the styles variable
            <h1 className={styles.success}>Success</h1> */}
            <h1 className='error'>Error</h1>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline