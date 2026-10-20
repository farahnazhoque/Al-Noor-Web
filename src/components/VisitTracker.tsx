'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const SESSION_ACTIVE_KEY = 'al-noor-session-active';

/** Old single-page hashes that should not appear on the homepage URL. */
const LEGACY_HOME_HASHES = new Set([
  '#about',
  '#products',
  '#units',
  '#investors',
  '#contact',
]);

export function hasActiveSession() {
  if (typeof window === 'undefined') {
    return false;
  }
  return sessionStorage.getItem(SESSION_ACTIVE_KEY) === '1';
}

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      sessionStorage.setItem(SESSION_ACTIVE_KEY, '1');
      return;
    }

    // Keep the first page as https://alnoorbd.site (no /#about etc.)
    if (LEGACY_HOME_HASHES.has(window.location.hash)) {
      window.history.replaceState(null, '', '/');
    }
  }, [pathname]);

  return null;
}
