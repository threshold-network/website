import React, { ReactNode, FC, ReactElement } from "react"

interface TrackedComponentProps {
  posthogLabel?: string
  children: ReactNode
}

export const TrackedComponent: FC<TrackedComponentProps> = ({
  posthogLabel,
  children,
}) => {
  const child = React.Children.only(children)
  const renderChildren = () => {
    const additionalProps = {} as any
    if (posthogLabel) {
      additionalProps["data-ph-capture-attribute-button-name"] = posthogLabel
      return React.cloneElement(child as ReactElement, additionalProps)
    }
    return child
  }

  return <>{renderChildren()}</>
}
