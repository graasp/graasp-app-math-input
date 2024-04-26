import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

// eslint-disable-next-line import/no-duplicates
import 'mathlive';
// eslint-disable-next-line import/no-duplicates
import { MathfieldElement } from 'mathlive';

interface MathFieldProps {
  value?: string;
  onChange?: (newValue: string) => void;
}

const MathField = ({ value, onChange }: MathFieldProps): JSX.Element => {
  const [internalValue, setInternalValue] = useState<string>('');
  const mf = useRef<MathfieldElement>();

  useEffect(() => {
    if (mf.current) {
      mf.current.mathVirtualKeyboardPolicy = 'manual';
    }
  });

  useEffect(() => {
    if (value) {
      setInternalValue(value);
    }
  }, [value]);

  const onInput = (evt: ChangeEvent<MathfieldElement>): void => {
    const newValue = evt.target.value;
    if (onChange) {
      onChange(newValue);
    }
    setInternalValue(newValue);
  };

  return (
    <math-field
      ref={mf}
      style={{
        width: '100%',
      }}
      onInput={onInput}
    >
      {typeof value !== 'undefined' ? value : internalValue}
    </math-field>
  );
};

export default MathField;
