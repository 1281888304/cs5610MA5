import { useDispatch } from "react-redux";
import './Square.css'

export default function(props){

    const symbol=props.symbol;

    let blockColor='white';
    if(symbol===''){
        blockColor='white';
    }else if(symbol===' '){
        blockColor='black'
    }

    const dispatch=useDispatch();

    return (<div onClick={() => dispatch(
        {
            type: 'boardClick',
            x: props.x,
            y: props.y,
        }
    )} id="square" class={blockColor}>
        {symbol}
    </div>);
    
}