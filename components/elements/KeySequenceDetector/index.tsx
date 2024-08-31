import { handleExcelDownload } from '@/components/sections/RSVPSection/form';
import { DEFAULT_SEQUENCE_CODE } from '@/utils/constants';
import { useEffect, useState } from 'react';

const targetSequence = (process.env.NEXT_PUBLIC_SEQUENCE_CODE ? 
  process.env.NEXT_PUBLIC_SEQUENCE_CODE.split(','): 
  DEFAULT_SEQUENCE_CODE);

const KeySequenceDetector = () => {
  const [sequence, setSequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      
      setSequence((prev) => {
        const newSequence = [...prev, key].slice(-targetSequence.length);
        
        if (JSON.stringify(newSequence) === JSON.stringify(targetSequence)) {
          handleExcelDownload();
          setSequence([]);
        }
        
        return newSequence;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default KeySequenceDetector;
