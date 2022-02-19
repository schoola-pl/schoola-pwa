import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Form = styled.div`
  transform: translateY(-10%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  list-style: none;
`;

export const NotificationContentWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.selectedItemGrey};

  h1 {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  & > div {
    display: grid;
    padding-block: 1rem;
    grid-template-columns: 35% 65%;
    justify-items: center;
    align-items: center;
    grid-gap: 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.selectedItemGrey};
    }
  }

  p {
    text-align: justify;
    padding-right: 2.5rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled(SidebarLink)`
  border-radius: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const CancelBox = styled(Box)`
  background-color: #fcb3b0;
`;

export const EditBox = styled(Box)`
  background-color: #e8fcd9;
`;
