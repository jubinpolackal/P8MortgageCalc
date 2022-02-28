import { useReducer, useCallback, useState, useEffect } from 'react';
import { StatusType } from '../globalState/actions';

export type ApiResponse = {
    status: string;
    data: any;
    error: any;
    sendRequest: Function;
};

const useApiRequest = (url: string, method: string) => {
    const [status, setStatus] = useState<string>('pending');
    const [data, setData] = useState<any>();
    const [error, setError] = useState<any>();

    const sendRequest = useCallback(async () => {
        try {
          setStatus("pending");
          const apiResponse = await fetch(url, {
              method: method,
              headers: { "Content-Type": "application/json" }
          });
          const json = await apiResponse.json();
          console.log("Received response: " + json);
          if (json.error) {
            setStatus('error');
            setError(json.error);
            setData(null);
          } else {
            setStatus('success');
            setData(json);
            setError(null);
          }
        } catch (error) {
          setStatus('error');
          setError(error);
        }
      },[method, url]);
    
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
    
      return { status, data, error, sendRequest };
}

export default useApiRequest;