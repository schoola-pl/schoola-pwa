import { StyledButton, StyledList } from './DropdownSelect.styles';
/* eslint-disable react/jsx-no-comment-textnodes */
import { useSelect } from 'downshift';
import React, { useEffect } from 'react';
import items from 'assets/globals/working-hours';

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
  dayTime: {
    start: string;
    end: string;
  };
  setDayTime: React.Dispatch<React.SetStateAction<{ start: string; end: string }>>;
}

const DropdownSelect: React.FC<props> = ({ dayTime, setDayTime, type }) => {
  const isStart = type === 'start';
  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    stateReducer
  });

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
        {selectedItem || dayTime[isStart ? 'start' : 'end'] || items[isStart ? 0 : items.length - 1]}
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
