export const ListItem = (props) => {
    const { fact, selectedFacts, setSelectedFacts, selected } = props;

    const onClick = () => {
        if(!selected) {
            setSelectedFacts(selectedFacts.some(selectedFact => selectedFact.fact === fact) ? selectedFacts.filter(f => f !== fact) : [...selectedFacts, { fact }]);
        } else {
            setSelectedFacts(selectedFacts.filter(f => f === { fact }));
        }
    };

    return (
        <div className="list-item" >
            <h5>{fact}</h5>
            <button onClick={()=>{onClick()}}>{selected? 'Deselect': 'Select'}</button>
        </div>
    )
};