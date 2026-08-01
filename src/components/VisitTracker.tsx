'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const SESSION_ACTIVE_KEY = 'al-noor-session-active';

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
    }
  }, [pathname]);

  return null;
}
