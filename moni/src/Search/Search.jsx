import * as React from 'react';
import { AppTool } from '../Home/AppTool';
import Miniplayer from '../Home/Miniplayer';
import Sidenav from '../Home/SidenavBar';

 function Search() {
  return (
    <>

      <div className='sidenav'>
        <Sidenav />
        
      </div>

      <div className='apptool'>
        <AppTool>
          
        </AppTool>
      </div>

      <div className='main-content' />

      <div className='footer'>
        <Miniplayer />
      </div>

    </>
  )
}

export default Search;