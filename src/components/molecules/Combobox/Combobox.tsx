import { useState } from 'react';
import { Wrapper, StyledCombobox, StyledHeading, StyledInputWrapper, StyledSelectedItem, StyledList, StyledDropdownToggle } from './Combobox.styles';
import { useCombobox, useMultipleSelection } from 'downshift';
import { items } from './items';

const Combobox = () => {
  const [inputValue, setInputValue] = useState<any>('');
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection();
  const getFilteredItems = () => items.filter((item) => selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue.toLowerCase()));
  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    inputValue,
    selectedItem: null,
    items: getFilteredItems(),
    stateReducer: (state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true // keep the menu open after selection.
          };
      }
      return changes;
    },
    onStateChange: ({ inputValue, type, selectedItem }) => {
      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue);
          break;
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('');
            addSelectedItem(selectedItem);
          }
          break;
        default:
          break;
      }
    }
  });
  return (
    <Wrapper>
      <StyledCombobox>
        <label {...getLabelProps()}>
          <StyledHeading>Wybierz swoje zainteresowania!</StyledHeading>
        </label>
        <StyledInputWrapper {...getComboboxProps()}>
          {selectedItems.map((selectedItem, index) => (
            <StyledSelectedItem key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
              {selectedItem}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelectedItem(selectedItem);
                }}
              >
                &#10005;
              </button>
            </StyledSelectedItem>
          ))}

          <input placeholder="twoje zainteresowania" {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))} />
          <StyledDropdownToggle {...getToggleButtonProps()} aria-label={'toggle menu'}>
            👇
          </StyledDropdownToggle>
        </StyledInputWrapper>
        <StyledList {...getMenuProps()}>
          {isOpen &&
            getFilteredItems().map((item, index) => (
              <li style={highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}} key={`${item}${index}`} {...getItemProps({ item, index })}>
                {item}
              </li>
            ))}
        </StyledList>
      </StyledCombobox>
    </Wrapper>
  );
};

export default Combobox;
