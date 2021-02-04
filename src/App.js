import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '1f96aa6f8a113a2a913bbcf89482b46f2e956eca572e1d8b807a3e2338fdd0dc/stage';


function App() {

    useEffect(() => {
        alanBtn({
            Key : alanKey
        })    
    }, [])





    return (
        <div>
             <h1>Alan AI  News Application</h1>
        </div>
    )
}

export default App
