import React, { ComponentType, useEffect, useState } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

export default function withLazyLoad<P extends object>(WrappedComponent: ComponentType<P>, threshold = 0.5): React.FC<P> {
    // eslint-disable-next-line react/display-name
    return (props: P) => {
        const [isInView, ref] = useIntersectionObserver(threshold)
        const [hasLoaded, setHasLoaded] = useState(false)

        useEffect(() => {
            if (isInView && !hasLoaded) setHasLoaded(true)
        }, [isInView, hasLoaded])

        return (
            <div ref={ref}>
                {hasLoaded && <WrappedComponent {...props} />}
            </div>
        )
    }
}