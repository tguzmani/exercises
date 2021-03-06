import { useState } from 'react'

const useToggle = () => {
  const [toggle, setToggle] = useState(false)

  const bind = {
    onClick: () => setToggle(!toggle),
    toggle,
  }

  return [toggle, bind, setToggle]
}

export default useToggle
