import { useState, useLayoutEffect, RefObject } from 'react'

interface RefProps {
  ref: RefObject<HTMLParagraphElement>
}

export const useShotenElement = ({ ref }: RefProps) => {
  const [isShorten, setIsShorten] = useState(false)
  
  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {}

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsShorten(true)
    } else {
      setIsShorten(false)
    }
  }, [ref])

  return {
    isShorten
  }
}
