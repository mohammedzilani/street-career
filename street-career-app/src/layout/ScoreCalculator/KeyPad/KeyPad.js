import React from 'react'
import Button from '../../../components/Button/Button'
import '../../../styles/styles.css'


// {
//    rows: [
//          [ {keyId: string, displayText}, {keyId: string, displayText}]
//          [ {keyId: string, displayText}, {keyId: string, displayText}]
//    ],
//    onButtonPress: (keyId: string) => void
// }

const KeyPad = (props) => (
    <section className="keypad">
        {props.rows.map(row => {
            return <div className="keypad_row">
                {row.map(keyInfo => {
                    return <Button onButtonPress={() => props.onButtonPress(keyInfo.keyId)}>
                        {keyInfo.displayText}
                    </Button>
                })}
            </div>
        })}
    </section>
);

export default KeyPad;