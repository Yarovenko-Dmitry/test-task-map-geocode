import React, {useEffect, useState} from 'react';
import Popover from '@material-ui/core/Popover';

type PopoverMessagePropsType = {
  address: string | undefined
}

export const PopoverMessage = ({address}: PopoverMessagePropsType) => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false)
    }, 1000)
  }, [address])


  return (
    <>
      {address
        ? <Popover
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
        : <></>
      }
    </>
  );
}

