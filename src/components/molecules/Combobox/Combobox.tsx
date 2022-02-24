import React, { useState } from 'react';
import { StyledCombobox, StyledDropdownToggle, StyledHeading, StyledInputWrapper, StyledList, StyledSelectedItem, Wrapper } from './Combobox.styles';
import { useCombobox, useMultipleSelection } from 'downshift';
import { theme } from 'assets/styles/theme';
import { useUser } from 'hooks/useUser';
import { useGetInterestedsQuery } from 'store';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Combobox: React.FC<props> = ({ setReadyState }) => {
  const { addInterested, removeInterested } = useUser();
  const interesteds = useGetInterestedsQuery({});
  const getIdFromName = (name: string) => interesteds.data?.find((item) => item.name === name)?.id;
  const [inputValue, setInputValue] = useState<string | undefined>('');
  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection();
  const getFilteredItems = () => {
    const items = interesteds.data?.map((item) => item.name) || [];
    return items.filter((item) => selectedItems.indexOf(item) < 0 && item.toLowerCase().startsWith(inputValue?.toLowerCase() || '')).sort();
  };
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
          if (selectedItem && selectedItems.length <= 2 && interesteds.data) {
            setInputValue('');
            const selectedItemId = getIdFromName(selectedItem);
            if (selectedItemId)
              addInterested({
                id: selectedItemId
              });
            if (selectedItems.length === 2) setReadyState(true);
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
                    removeInterested(getIdFromName(selectedItem as string) || 0);
                    setReadyState(false);
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
          {interesteds.isLoading ? (
            <p>loading...</p>
          ) : isOpen ? (
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
            ))
          ) : null}
        </StyledList>
      </StyledCombobox>
    </Wrapper>
  );
};

export default Combobox;
