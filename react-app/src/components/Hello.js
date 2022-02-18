import React from "react";

const Hello = () => {
    //with JSX
    // return (
    //     <div>
    //         <h1>Hello Akriti</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement(
        'div',
        { id: 'hello', className: 'demoClass' },
        React.createElement('h1', null, 'Hello Akriti')
    );
}

export default Hello;