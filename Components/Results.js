import ItemTumbnsil from "./ItemTumbnsil";

// flip-move
import FlipMove from 'react-flip-move'

const Results = ({results}) => {
    return (
        <FlipMove className='px-5 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center'>
           {results.map(item =>(
            <ItemTumbnsil key={item.id} item={item}/>
           ))} 
        </FlipMove>
    );
};

export default Results;