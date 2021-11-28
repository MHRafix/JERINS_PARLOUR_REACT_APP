import Button from '@restart/ui/esm/Button';
import * as React from 'react';
import DashHeader from './DashboardHeader/DashHeader';
import OffCanvasMenu from './DashboardHeader/OffCanvasMenu';
import OffCanvasMini from './DashboardHeader/OffCanvasMini';


function Pannel021() {

  const [ open, setOpen ] = React.useState(false);
  const [ block, setBlock ] = React.useState(true);
  
  // Handle offcanvas menu toggle
  const handleToggleMenu = () => {
       
    setOpen(true);
    setBlock(false);

  }

    return (
        <>
        { open ? <OffCanvasMini /> : <></>}
          <DashHeader />
          <OffCanvasMenu />
          { block ? <Button className="specialBtn" id="toggle" onClick={ handleToggleMenu } ><span className="fas fa-bars"></span></Button> : <></>}
          
        </>
    );
}

export default Pannel021;