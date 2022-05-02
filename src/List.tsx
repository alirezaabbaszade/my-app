import React from 'react';
import {set as set} from "./App";

const List: React.FC<set> = ({people}) => {

    const renederList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt=""/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} Years Old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renederList()}
        </ul>
    );
};

export default List;