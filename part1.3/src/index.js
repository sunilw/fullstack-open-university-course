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
        <Part part={props.part1}  />
        <Part part={props.part2}   />
        <Part part={props.part3}  />
        </div>
    );
};

const Total = (props) => {
    return(
        <div>
        <h4>{props.total.name} {props.total.exercises}</h4>
        </div>
    );
};

const Part = (props) => {
    return(
        <div className="part">
        <p>{props.part.name} {props.part.exercises} </p>
        </div>
    );
};

const App = () => {

    const course = 'Half Stack application development';

    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };
    const part3 = {
        name: 'State of a component',
        exercises: 14
    };


    return(
        <div>

        <Header  course = {course}  />

        <Content part1 = {part1} part2={part2} part3={part3}   />

        <Total total = {part3} />

        </div>
    );

};

ReactDOM.render(<App />, document.getElementById('root'));
