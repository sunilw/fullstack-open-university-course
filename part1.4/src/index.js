import React from 'react';
import ReactDOM from 'react-dom';


const Header = ( props ) => {

    return(
        <div>
            <h1>{ props.course }</h1>
        </div>
    );
};

const Content = ( props ) => {
    return(
        <div className="content-container">
        <Part parts={props.parts[0]}  />
        <Part parts={props.parts[1]}  />
        <Part parts={props.parts[2]}  />
        </div>
    );
};

const Total = (props) => {

    let sum = 0 ;

    props.parts.forEach(
        el => {
            sum = (sum + el['exercises']);
        }
    );

    console.log(sum);

    return(
        <div>
            <h4>Total: {sum}</h4>

        </div>
    );
};

const Part = (props) => {
    return(
        <div className="part">
            <p>{props.parts.name} {props.parts.exercises}</p>
        </div>
    );
};

const App = () => {

    const course = 'Half Stack application development';

    const part = [

        {
            name: 'Fundamentals of React',
            exercises: 10
        },

        {
            name: 'Using props to pass data',
            exercises: 7
        },

        {
            name: 'State of a component',
            exercises: 14
        }

    ];


    return(
        <div>

            <Header  course = {course}  />

            <Content parts={part}  />

        <Total parts = {part}  />

        </div>
    );

};

ReactDOM.render(<App />, document.getElementById('root'));
