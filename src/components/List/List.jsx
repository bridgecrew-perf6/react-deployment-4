import { ListItem } from "../ListItem/ListItem";

export const List = (props)=>{
    const {facts, title, selected = false} = props;
    return (
      <div className="list">
        <h3>{title}</h3>
        {facts.map(({fact}) => (
            <ListItem fact={fact} selectedFacts={props.selectedFacts} setSelectedFacts={props.setSelectedFacts} selected={selected}/>
        ))}
      </div>
    );
};