import { FC } from 'react';

const possibleSizes = ['XS', 'S', 'M', 'L', 'XL'];

interface Props {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, onSizeChange }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        {possibleSizes.map((size) => (
          <button
            key={size}
            className={selectedSize === size ? 'active' : ''}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <select
        className="tabla"
        value={selectedSize}
        onChange={(e) => onSizeChange(e.target.value)}
      >
        {possibleSizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
