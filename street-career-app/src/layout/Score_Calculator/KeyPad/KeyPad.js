import React from 'react'
import KeyPadRow from './KeyPadRow/KeyPadRow'
import Button from '../../../components/Button/Button'
import '../../../styles/styles.css'



const KeyPad = (props)=>(
    <section className="keypad">
    <KeyPadRow>
        <Button onButtonPress={props.onButtonPress}>0</Button>
        <Button onButtonPress={props.onButtonPress}>1</Button>
        <Button onButtonPress={props.onButtonPress}>2</Button>
        <Button onButtonPress={props.onButtonPress}></Button>
    </KeyPadRow>
    <KeyPadRow>
        <Button onButtonPress={props.onButtonPress}>3</Button>
        <Button onButtonPress={props.onButtonPress}>4</Button>
        <Button onButtonPress={props.onButtonPress}>5</Button>
        <Button onButtonPress={props.onButtonPress}>W</Button>
    </KeyPadRow>
    <KeyPadRow>
        <Button onButtonPress={props.onButtonPress}>6</Button>
        <Button onButtonPress={props.onButtonPress}>wd</Button>
        <Button onButtonPress={props.onButtonPress}>nb</Button>
        <Button onButtonPress={props.onButtonPress}>C</Button>
    </KeyPadRow>
</section>
);

export default KeyPad;