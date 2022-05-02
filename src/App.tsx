import React from 'react';
import './App.css';
import {useState} from "react";
import List from "./List";
import AddToList from "./AddToList";

 export interface set {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

function App() {
    const [people, setPeople] = useState<set['people']>([
        {
            name: 'Lebron James',
            url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
            age: 36,
            note: "ye matni hala"
        }

    ]);
    return (
        <div className="App">
            <h1>People invited to my party</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    );
}

export default App;
