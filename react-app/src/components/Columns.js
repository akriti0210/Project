import React from 'react'

function Columns() {
    const items = [
        {
            id: 1,
            title: "Geeks"
        }
    ]

    return (
        // <React.Fragment>
        //     {
        //         items.map(item => (
        //             <React.Fragment key={item.id}>
        //                 <h1>Title</h1>
        //                 <p>{item.title}</p>
        //             </React.Fragment>
        //         ))
        //     }

        //     <td>Name</td>
        //     <td>Akriti</td>
        // </React.Fragment>

        //shorter way but limitation is key attribute cannot be passed
        <>
            <td>Name</td>
            <td>Akriti</td>
        </>
    )
}

export default Columns