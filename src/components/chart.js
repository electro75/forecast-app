import  React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default (props)=> {

    return (
        <div>
            <Sparklines data= {props.data} svgHeight={80} svgWidth={180}  >
                <SparklinesLine color= {props.color} />
            </Sparklines>
        </div>    
    )

}
