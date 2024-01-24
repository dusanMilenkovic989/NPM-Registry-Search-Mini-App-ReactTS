import React, { useEffect } from 'react'

/**
 * Custom hook for focusing an element.
 * @template T Describes that the referenced value will be an HTML element, or null.
 * @param {React.MutableRefObject<T>} elementRef Element's reference or null, if it does not exist at the moment.
 * @returns {void} No return value.
 */
const useComponentFocus = <T extends HTMLElement | null>(elementRef: React.MutableRefObject<T>): void =>
{
    useEffect((): void => void elementRef.current?.focus())
}

export { useComponentFocus }