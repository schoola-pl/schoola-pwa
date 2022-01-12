import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 3rem 3rem 0;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid #eceff7;
  padding-bottom: 1rem;
`;

export const Select = styled.select`
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  resize: none;
  border: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
  transition: border 0.3s linear;
  margin: 2rem 0 2rem 0;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 30rem;
  margin-top: 3rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const PeopleSelect = styled(Select)`
  transform: translateY(-20%);
`;

export const PeopleCard = styled.div`
  width: 79rem;
  height: 80%;
  background-color: white;
  margin-right: 12rem;
  border-radius: 1rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const InnerWrapper = styled.div`
  margin-top: -2rem;
  border-right: 2px solid #eceff7;
`;

export const ClassHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
  padding: 1rem;
`;

export const PeopleForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PeopleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-height: 8rem;
  align-items: center;
  border-radius: 1rem;
  width: 95%;
  margin-bottom: 0.5rem;

  &:first-child {
    margin-top: 1rem;
  }

  & > * {
    margin-inline: 0.8rem;
  }
`;
