import React, {useEffect, useState} from 'react';
import Popover from '@material-ui/core/Popover';

type PopoverMessagePropsType = {
  address: string | undefined
}

export const PopoverMessage = ({address}: PopoverMessagePropsType) => {
 let [isOpen, setIsOpen] = useState<boolean>(true)
// debugger
  setTimeout(() => {
    setIsOpen(false)
  }, 2000)
  return (
    <Popover
      // open={true}
      open={isOpen}
      anchorReference="anchorPosition"
      anchorPosition={{top: 0, left: 0}}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'center',
      }}
    >
      {address}
    </Popover>
  );
}

