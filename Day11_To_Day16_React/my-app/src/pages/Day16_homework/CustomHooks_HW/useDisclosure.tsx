import React, { useCallback, useState } from "react";

// function Demo() {
//     const [opened, handlers] = useDisclosure(false, {
//       onOpen: () => console.log('Opened'),
//       onClose: () => console.log('Closed'),
//     });

//     // Calls onOpen callback and sets opened to true
//     handlers.open();

//     // Does nothing, opened is already true
//     handlers.open();

//     // Calls onClose callback and sets opened to false
//     handlers.close();

//     // Does nothing, opened is already false
//     handlers.close();

//     // Calls onOpen or onClose depending on next state
//     handlers.toggle();
//   }
// why render the component twice
//The onOpen or onClose callback is triggered, and setOpened updates the state.
//React renders the component again, and because Strict Mode forces an additional render, the onOpen or onClose callback is called twice.

//why use the hook
//managing UI elements like modals, drawers, dropdowns, tooltips, or other components
//to toggle between visible (open) and hidden (closed) states.

function UseDisclosure() {
  //use hook her
  // eslint-disable-next-line
  const [opened, open, close, toggle] = useDisclosure(false, {
    onOpen: () => {
      console.log("trigger onOpen(), and open now !");
    },
    onClose: () => {
      console.log("trigger onClose(), and close now !");
    },
  });

  return (
    <div
      style={{
        margin: "50px",
        width: "500px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p>test the useDisclosure hook</p>
      <button onClick={() => open()}>click to open</button>
      <button onClick={() => close()}>click to close</button>
      <button onClick={() => toggle()}>toggle</button>
    </div>
  );
}
// callbacks = {
//     onOpen: undefined,
//     onClose: undefined
// }
function useDisclosure(
  initialState: boolean = false,
  //type callbacks
  callbacks: {
    onOpen: () => void;
    onClose: () => void;
  }
): [opened: boolean, open: () => void, close: () => void, toggle: () => void] {
  const [opened, setOpened] = useState<boolean>(false);
  const { onOpen, onClose } = callbacks;

  //useCallback will memorize child components, and not rerender
  //This means the function reference will only change if one of its dependencies changes.
  // the memoized function will be recreated with the new value.

  // open function to always call the latest version of onOpen.
  const open = useCallback(() => {
    setOpened((prevIsOpen) => {
      if (!prevIsOpen) {
        onOpen?.();
        return true;
      }
      return prevIsOpen;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setOpened((prevIsOpen) => {
      if (prevIsOpen) {
        onClose?.(); //change status as false
        return false;
      }
      return prevIsOpen; // the status maintain false
    });
  }, [onClose]);

  const toggle = useCallback(() => {
    setOpened((prevIsOpen) => {
      if (prevIsOpen) {
        onClose?.();
      } else {
        onOpen?.();
      }
      return !prevIsOpen;
    });
  }, [onOpen, onClose]);

  return [opened, open, close, toggle];
}

export default UseDisclosure;
