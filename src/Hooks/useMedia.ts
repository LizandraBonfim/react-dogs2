import {useState, useEffect, useCallback} from 'react';

const useMedia = (midia: string) => {

  const [matchMediaQuery, setMatchMediaQuery] = useState<boolean>(false);

  const handleMediaQuery = useCallback(() => {

    const {matches} = window.matchMedia(midia);
    setMatchMediaQuery(matches);

  }, [midia]);


  useEffect(() => {

    window.addEventListener('resize', handleMediaQuery);

    return () => {
      window.removeEventListener('resize', handleMediaQuery);
    }

  }, [handleMediaQuery]);

  useEffect(() => {
    handleMediaQuery();
  }, [handleMediaQuery])

  return matchMediaQuery;

}

export default useMedia;
