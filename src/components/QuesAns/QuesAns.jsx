import React from 'react';

const QuesAns = () => {
    return (
        <div className='py-12'>
            <h2 className='text-4xl font-semibold'>Question ans Answer</h2>
            <div className='py-10'>

            <div>
                <h4 className='text-2xl text-left'>Difference between props vs state?</h4>
                <p className='text-xl text-left py-6'>
                    In the context of React, state and props are two fundamental concepts that are used to manage data in a component-based architecture. The term "properties" is used to refer to the way in which data is moved from one component to another. Props are read-only, so the descendant component is unable to alter them. Instead, it is the primary component's duty to make any necessary updates to the attributes.
                    Contrarily, state refers to a component's private data that the component has the power to modify. State controls information that is specific to a component and may change over time, such as human input or the result of an API call. State changes can be made without using props by using the setState function, which re-renders the component and all of its children.
                </p>
            </div>

//             <div>
//                 <h4 className='text-2xl text-left'>How does useState work?</h4>
//                 <p className='text-xl text-left py-6'>
//                     Functional components can manage state using React's built-in useState method. When UseState is invoked, it gives an array containing two values: the value of the current state and a function to change the state. The first value is initialized using the starting state that useState gets as input.
//                 </p>
//             </div>

//             <div>
//                 <h4 className='text-2xl text-left'>How does React work?</h4>
//                 <p className='text-xl text-left py-6'>
//                     React is a JavaScript front-end toolkit that uses a virtual DOM to display and change components—reusable UI elements—quickly and efficiently. React uses props to move data between components, and the useState function manages state inside a component. When a component's state changes, React instantly updates the virtual DOM and creates a new rendering of the component.
//                 </p>
//             </div>

//             <div>
//                 <h4 className='text-2xl text-left'>What does useEffect do other than loading data?</h4>
//                 <p className='text-xl text-left py-6'>
//                     The useEffect method in React is used to create side effects in functional components. In addition to data loading, useEffect can also be used to change the document header, react to window or document actions, as well as establish connections to APIs.
//                 </p>
//             </div>
            
//             </div>
//         </div>
//     );
// };

// export default QuesAns;