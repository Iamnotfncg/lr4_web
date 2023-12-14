import { useEffect } from 'react';

const useConsoleLog = (data) => {
  useEffect(() => {
    console.log('Data:', data);
  }, [data]);
};

export default useConsoleLog;
