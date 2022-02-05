import { useState } from 'react';
import { StyledCombobox, StyledDropdownToggle, StyledHeading, StyledInputWrapper, StyledList, StyledSelectedItem, Wrapper } from './Combobox.styles';
import { useCombobox, useMultipleSelection } from 'downshift';
import { items } from './items';
import { theme } from 'assets/styles/theme';

const Combobox = () => {
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection();
  const getFilteredItems = () =>
    items.filter((item) => selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue?.toLowerCase() || ''));
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
          if (selectedItem && selectedItems.length <= 2) {
            setInputValue('');
            // TODO: Add selected item to user in database
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
          <div style={{ padding: '0.6rem' }}>
            {!selectedItems.length && <div style={{ paddingBottom: '1.2rem', fontSize: '1.2rem' }}>Tutaj znajdziesz wybrane 3 pozycje!</div>}
            {selectedItems.map((selectedItem, index) => (
              <StyledSelectedItem key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>
                {selectedItem}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    // TODO: Remove selected item from user in database
                    removeSelectedItem(selectedItem);
                  }}
                >
                  X
                </button>
              </StyledSelectedItem>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <input placeholder="Czym się interesujesz?" {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))} />
            <StyledDropdownToggle {...getToggleButtonProps()} aria-label={'toggle menu'}>
              👇
            </StyledDropdownToggle>
          </div>
        </StyledInputWrapper>
        <StyledList {...getMenuProps()}>
          {isOpen &&
            getFilteredItems().map((item, index) => (
              <li
                style={
                  highlightedIndex === index
                    ? {
                        backgroundColor: theme.colors.accentGreen,
                        paddingLeft: '1.5rem',
                        color: 'white'
                      }
                    : {}
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                {item}
              </li>
            ))}
        </StyledList>
      </StyledCombobox>
    </Wrapper>
  );
};

export default Combobox;
