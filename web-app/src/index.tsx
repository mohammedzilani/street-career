import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SampleComponent } from './components/sample-component'

const boot = async () => {
    // await preBootSetup()
    // const store = getReduxStore()

    ReactDOM.render(
        <div>
            Hello world
            <SampleComponent/>
        </div>,
        document.getElementById("root")
    )
}

boot().catch(e => {
    throw e
})