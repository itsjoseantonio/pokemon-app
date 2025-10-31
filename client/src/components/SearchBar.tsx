import { Input } from './ui/input';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
  return (
    <Input
      placeholder='Search'
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className='rounded-full border-gray-300 focus:ring-2 bg-white'
    />
  );
};

export default SearchBar;
