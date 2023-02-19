import React from 'react';
import { DiReact } from "react-icons/di";
import Forms from "./components/forms";
import Body from "./components/body"
import { useState, useEffect, useCallback } from "react";

function App() {
  let [query, setQuery] = useState("");
  let [nameList, setnameList] = useState([]);
  const filterednames = nameList.filter(
    item => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.bio.toLowerCase().includes(query.toLowerCase())  
      )
    }
  )
  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setnameList(data)
      });
  }, [])
  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App grid place-items-center">
      <h1 className="text-5xl">
        <DiReact className="inline-block text-blue-500 align-top" />React Revision</h1>
      <p>In this revision I will built an simple page in which you can add uses that contains user name and bio, and display it below along with others users</p>
      <Forms query={query}  onQueryChange={myQuery => setQuery(myQuery)} onSendNames={myNames => setnameList([...nameList, myNames])}
        lastId={nameList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}/>
      <div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">Peoples List</h5>
      </div>
      {filterednames.map(names =>
        (<Body key={names.id} name={names} 
          onDeleteNames={
                nameId =>
                  setnameList(nameList.filter(names =>
                    names.id !== nameId))
              }
        />
        )
        )
      }

    </div>
  );
}

export default App;
