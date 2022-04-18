import React, { useEffect, useState } from "react";
import { getCatsFacts } from "./services/api";
import "./App.scss";
import { List } from "./components/List/List";

export const App = () => {
  const [facts, setFacts] = useState([]);
  const [selectedFacts, setSelectedFacts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(selectedFacts)
  const onMount = async () => {
    setLoading(true);
    const { data } = await getCatsFacts();
    console.log(data)
    setFacts(data);
    console.log(facts)
    setLoading(false);
  };
  useEffect(() => {
    onMount();
  }, []);
  if (loading) return <div>...loading</div>;
  return (
    <div className="app">
      <List title="Cat Facts" facts={facts} setSelectedFacts={setSelectedFacts} selectedFacts={selectedFacts}/>
      <List title="Selected Facts" facts={selectedFacts} setSelectedFacts={setSelectedFacts} selectedFacts={selectedFacts} selected/>

    </div>
  );
};
