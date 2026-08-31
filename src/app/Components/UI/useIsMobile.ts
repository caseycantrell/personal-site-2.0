import { useSyncExternalStore } from 'react'
import { DESKTOP_BREAKPOINT } from './panels'

const MOBILE_QUERY = `(max-width: ${DESKTOP_BREAKPOINT - 1}px)`

const subscribe = (onStoreChange: () => void) => {
  const query = window.matchMedia(MOBILE_QUERY)
  query.addEventListener('change', onStoreChange)
  return () => query.removeEventListener('change', onStoreChange)
}

const getSnapshot = () => window.matchMedia(MOBILE_QUERY).matches

// the server has no viewport, so assume desktop and let the first client
// snapshot correct it
const getServerSnapshot = () => false

export const useIsMobile = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
