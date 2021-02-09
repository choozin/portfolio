//import { ProximityCounter } from './ProximityCounter'

export const Space = ({ data, position, onSpaceClick }) => {

    const [ status, setStatus ] = useState('untouched')

    // if ISNT revealed
    if(!data.revealed) setStatus(data.isFlagged ? 'f' : null)

    // if IS revealed && mine
    if(data.mine) setStatussetStatus('M')

    // if IS revealed but ISNT mine
    if(data.neighbour === 0) setStatus(null)

    return (
        <div onClick={onSpaceClick} >
            {status}
        </div>
    )

}