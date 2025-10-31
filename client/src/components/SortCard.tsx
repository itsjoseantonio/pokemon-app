import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface RadioItems {
  id: string;
  value: string;
  label: string;
}

interface SortCardProps {
  radioValue: string;
  setRadioValue: (value: 'number' | 'name') => void;
  options: RadioItems[] | null;
}

const SortCard = ({ radioValue, setRadioValue, options }: SortCardProps) => {
  return (
    <div className='absolute top-14 right-2 bg-primary rounded-md shadow-sm w-40 z-10 pb-2'>
      <div className='text-white text-base font-bold px-5 pt-4 pb-2'>
        Sort by:
      </div>
      <div className='bg-white rounded-md p-4 w-[90%] mx-auto'>
        <RadioGroup
          value={radioValue}
          onValueChange={setRadioValue}
          className='flex flex-col space-y-3'
        >
          {options?.map((r: RadioItems) => (
            <div className='flex items-center space-x-3' key={r.id}>
              <RadioGroupItem
                value={r.value}
                id={r.id}
                className='boder-2 border-primary'
              />
              <Label htmlFor={r.id} className='text-base '>
                {r.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SortCard;
