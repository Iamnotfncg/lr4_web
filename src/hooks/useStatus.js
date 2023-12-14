import { useState, useEffect } from 'react';

const useStatus = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem('status');
    if (savedStatus) {
      setStatus(savedStatus === 'true');
    }
  }, []);

  return [status, setStatus];
};

export default useStatus;
