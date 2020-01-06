import React from 'react';
import ReactDOM from 'react-dom';


const Header = ( props ) => {


    return(
            <div>
            <h1>{ props.coursename }</h1>
            </div>
    );
};

const Content = ( props ) => {

    return(
            <div className="content-container">
            <Part  part={props.content[0]}  />
            <Part   part={props.content[1]}   />
            <Part   part={props.content[2]}  />
            </div>
    );
};

const Total = (props) => {

    let sum = 0 ;
    let parts = props.parts ;

    console.log(parts);
    console.log("================");

    parts.forEach(
        el => {
            // console.log(el);
            // console.log((el['exercises'] ))
            sum = (sum + el['exercises'])
        }
    )

    return(
            <div>
            <h4>Total: {sum}</h4>
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

    const course = {
        name: 'Half Stack application development',
        parts: [
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
        ]
    };


    return(
            <div>

            <Header  coursename={course.name}  />

            <Content content={course.parts}   />

            <Total  parts={course.parts}  />

        </div>
    );

};

ReactDOM.render(<App />, document.getElementById('root'));
