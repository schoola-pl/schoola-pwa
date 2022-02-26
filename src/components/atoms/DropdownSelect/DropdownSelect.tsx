import { StyledButton, StyledList } from './DropdownSelect.styles';
/* eslint-disable react/jsx-no-comment-textnodes */
import { useSelect } from 'downshift';
import React, { useEffect } from 'react';

const items: string[] = ['8:00', '8:55', '9:50', '10:55', '11:50', '12:45', '13:40', '14:30', '15:20', '16:00'];

const stateReducer = (state: any, actionAndChanges: any) => {
  const { type, changes } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
      const nextItemIndex = items.indexOf(state.selectedItem);
      if (nextItemIndex === items.length - 1) {
        return { selectedItem: items[0] };
      }
      return { selectedItem: items[nextItemIndex + 1] };
    case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowUp:
      const previousItemIndex = items.indexOf(state.selectedItem);
      if (previousItemIndex === 0) {
        return { selectedItem: items[items.length - 1] };
      }
      return { selectedItem: items[previousItemIndex - 1] };
    default:
      return changes; // otherwise business as usual.
  }
};

interface props {
  type: 'start' | 'end';
  setDayTime: React.Dispatch<React.SetStateAction<{ start: string; end: string }>>;
}

const DropdownSelect: React.FC<props> = ({ setDayTime, type }) => {
  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    stateReducer
  });
  const isStart = type === 'start';

  useEffect(() => {
    if (selectedItem) {
      if (isStart) {
        setDayTime((prev) => ({ ...prev, start: selectedItem }));
      } else {
        setDayTime((prev) => ({ ...prev, end: selectedItem }));
      }
    }
  }, [selectedItem]);

  return (
    <div>
      <label {...getLabelProps()} />
      <StyledButton type="button" {...getToggleButtonProps()}>
        {selectedItem || items[isStart ? 0 : items.length - 1]}
      </StyledButton>
      <StyledList {...getMenuProps()}>
        {isOpen &&
          items.map((item: string, index: any) => (
            <li
              style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item: item, index })}
            >
              {item}
            </li>
          ))}
      </StyledList>
      <div />
    </div>
  );
};

export default DropdownSelect;
