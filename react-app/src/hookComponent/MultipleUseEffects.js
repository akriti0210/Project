// import React, { useState, useEffect } from 'react'

// function MultipleUseEffects() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         document.title = `You clicked {count} times`
//     });

//     const [isOnline, setIsOnline] = useState(null)

//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline)
//         }
//     }
//     ChatAPI.subscribeToFriendsStatus(props.friend.id, handleStatusChange)

//     return= () => {
//         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//     );
//     return (
//         <div>MultipleUseEffects</div>
//     )
// }

// export default MultipleUseEffects