import { forwardRef, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ open, children }) {
  const dialog = useRef();


  useEffect(() => {
  if(open === true) {
    dialog.current.showModal();
  } else {
    dialog.current.close();
  }
}, [open]) //re executes because the open changes (with each change of open the useEffect executes again)


  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;
