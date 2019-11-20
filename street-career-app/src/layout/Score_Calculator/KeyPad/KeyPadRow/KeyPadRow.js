import React from 'react'
import '../../../../styles/styles.css'

const keypadRow = (props) => (
    <div className="keypad_row">
      {props.children}
    </div>
  );
export default keypadRow;