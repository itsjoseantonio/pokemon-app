import { useState } from 'react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import SortCard from '@/components/SortCard';
import { radioOptions } from '@/constants';

interface FilterControlsProps {
  search: string;
  setSearch: (value: string) => void;
  sortBy: 'number' | 'name';
  setSortBy: (value: 'number' | 'name') => void;
}

const FilterControls = ({
  search,
  setSearch,
  sortBy,
  setSortBy,
}: FilterControlsProps) => {
  const [showSort, setShowSort] = useState<boolean>(false);

  return (
    <div className='flex items-center gap-2'>
      <SearchBar searchValue={search} setSearchValue={setSearch} />
      <Button
        className='rounded-full bg-white hover:bg-white hover:border-none text-primary text-lg font-bold w-10 h-10'
        onClick={() => setShowSort(!showSort)}
      >
        {sortBy === 'number' ? '#' : 'A'}
      </Button>
      {showSort && (
        <SortCard
          radioValue={sortBy}
          setRadioValue={setSortBy}
          options={radioOptions}
        />
      )}
    </div>
  );
};

export default FilterControls;
