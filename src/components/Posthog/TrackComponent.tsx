import React, { ReactNode, FC, ReactElement } from "react"

interface TrackComponentProps {
  posthogLabel?: string
  children: ReactNode
}

export const TrackComponent: FC<TrackComponentProps> = ({
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
