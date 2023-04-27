import { useEffect } from 'react';

interface UseBeforeUnloadProps {
  onBeforeUnload?: (e: BeforeUnloadEvent) => void;
}

function useBeforeUnload({ onBeforeUnload }: UseBeforeUnloadProps) {
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      onBeforeUnload?.(e);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);
}

export default useBeforeUnload;