import React from 'react';


const Weather = (props) => {

    return(
        <div>
            <h1>Weather</h1>
            <p>{props.temperature}</p>
        </div>
    );
};

export default Weather;


// export default function Weather extends FunctionalComponent<(testProps), testState> {

//     return(
//         <div>
//             <h1>Weather</h1>
//             <p>{testProps.temperature}</p>
//         </div>
//     );
// };