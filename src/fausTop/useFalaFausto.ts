import React, { useState } from 'react';
import { Bicho } from './types';
import { faustoSearch } from './services/faustoService';

export const useFalaFausto = () => {
  const [loading, setLoading] = useState<boolean>();
  const [words, setWords] = useState<string[]>();

  const search = React.useCallback(async () => {
    setLoading(true);
    const wordsList = await faustoSearch();
    setWords(wordsList);
    setLoading(false);
  }, []);
  return {
    loading,
    search,
    words
  };
};
