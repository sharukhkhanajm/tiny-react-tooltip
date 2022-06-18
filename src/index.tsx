import * as React from 'react'
import './styles.css'
interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
  content?: React.ReactNode
  onShow?: () => void
  onHide?: () => void
}

export const Tooltip = ({
  children,
  delay,
  className,
  direction,
  content,
  onHide,
  onShow,
  ...props
}: Props) => {
  let timeout: NodeJS.Timeout | null = null
  const [active, setActive] = React.useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
      onShow && onShow()
    }, delay || 200)
  }

  const hideTip = () => {
    if (timeout) {
      clearInterval(timeout)
    }

    setActive(false)
    onHide && onHide()
  }
  return (
    <div
      className={`Tooltip-Wrapper ${className}`}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      {...props}
    >
      {children}
      {active && content ? (
        <div className={`Tooltip-Tip ${direction || 'right'} `}>{content}</div>
      ) : null}
    </div>
  )
}
