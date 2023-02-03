import React from 'react';
import CUstomeHooks from './custome_hook_data_get'

function Callback({handleclick}) {
    return (
        <>
              <button onClick={() => handleclick(handleclick)}>Change Message</button>
              <CUstomeHooks/>
        </>
    );
}

export default Callback;