import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Wrapper = styled.div`
  background-color: white;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${({ theme }) => theme.fontSize.s};

    strong {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

export const ClassDetails = styled.details`
  height: 5.5rem;
  width: 35rem;
  background-color: white;
  display: flex;
  max-width: 35rem;
  border-radius: 1rem;
  border-top: 5px solid ${({ theme }) => theme.colors.accentGreen};
  text-decoration: none;
  position: relative;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  summary {
    cursor: pointer;
    list-style: none;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  summary::after {
    content: '>';
    position: absolute;
    // left: -10px;
    right: 20px;
    transition: transform 0.1s ease-in-out;
    transform: rotate(90deg);
  }

  button#more {
    width: 60%;
    background-color: ${({ theme }) => theme.colors.accentBlue};
    font-size: 1.2rem;
    height: auto;
    padding: 1rem 0;
    margin: 0 auto;
    border-radius: 1.3rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accentBlueLight};
    }
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  height: 5rem;
  width: 5rem;
  background-color: #eceff7;
`;

export const EditLink = styled(SidebarLink)`
  background-color: #e8fcd9;
  border-radius: 1rem;
  height: 4rem;
  width: 4rem;
  padding: 1rem;
`;
