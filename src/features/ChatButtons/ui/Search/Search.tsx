import { setSearchTerm } from '@/entities';
import { useAppDispatch, useAppSelector } from '@/shared';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Input, SearchButton, SearchContainer } from '../../styles';

export const Search = () => {
  const searchTerm = useAppSelector(state => state.appSlice.searchTerm);
  const dispatch = useAppDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) {
      inputRef.current?.focus();
    } else {
      dispatch(setSearchTerm(''));
    }
  }, [isSearching]);

  const toggleSearching = () => setIsSearching(!isSearching);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.currentTarget.value));
  };

  return (
    <SearchContainer $isSearching={isSearching}>
      <SearchButton onClick={toggleSearching}>
        {isSearching ? (
          'X'
        ) : (
          <img src="/images/search.svg" alt="search chat" width={18} height={18} />
        )}
      </SearchButton>

      {isSearching && <Input ref={inputRef} value={searchTerm} onChange={onInputChange} />}
    </SearchContainer>
  );
};
