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

  return posthogLabel
    ? React.cloneElement(child as ReactElement, {
        "data-ph-capture-attribute-button-name": posthogLabel,
      })
    : (child as ReactElement)
}
