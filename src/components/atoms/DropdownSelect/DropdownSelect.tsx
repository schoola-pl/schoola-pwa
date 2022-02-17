import styled from 'styled-components';
/* eslint-disable react/jsx-no-comment-textnodes */
import { useSelect } from 'downshift';

const items: string[] = ['8:00', '8:55', '9:50', '10:55', '11:50', '12:45', '13:40', '14:30', '15:20', '16:10'];

const StyledButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: white;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
`;

const StyledList = styled.ul`
  position: absolute;
  background-color: white;
  width: 8rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  border-radius: 1rem;
  list-style: none;
  overflow-y: scroll;

  li {
    width: 100%;
    padding-bottom: 1rem;
    transform: translateX(-55%);
    //    border-bottom: 1px solid ${({ theme }) => theme.colors.selectedItemGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

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
const DropdownSelect = () => {
  const { isOpen, selectedItem, getToggleButtonProps, getLabelProps, getMenuProps, highlightedIndex, getItemProps } = useSelect({
    items,
    stateReducer
  });
  return (
    <div>
      <label {...getLabelProps()} />
      <StyledButton type="button" {...getToggleButtonProps()}>
        {selectedItem || items[0]}
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
      {/* if you Tab from menu, focus goes on button, and it shouldn't. only happens in codesandbox. */}

      <div />
    </div>
  );
};

export default DropdownSelect;
