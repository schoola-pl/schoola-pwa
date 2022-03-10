import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const Wrapper = styled.div`
  height: 10rem;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled(SidebarLink)`
  border-radius: 1rem;
  height: 4.75rem;
  width: 4.75rem;
  padding: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

export const EditBox = styled(Box)`
  background-color: #e8fcd9;
  width: 4rem;
  height: 4rem;
`;

export const StudentBox = styled(Box)`
  background-color: #b8d0fc;
`;

export const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    transform: translateY(40%);
    font-size: 1.5rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    text-align: left;
    font-size: 1.5rem;
  }
`;

export const DeleteBox = styled(Box)`
  background-color: #fcb3b0;
  width: 4rem;
  height: 4rem;
`;

export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;

  h1 {
    width: 100%;
    display: inline;
    color: ${({ theme }) => theme.colors.selectedItemGrey};
    padding: 1rem;
    text-align: left;
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Line = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.selectedItemGrey};
  width: 50%;
`;

export const SecondLine = styled.div`
  height: 2px;
  background: ${({ theme }) => theme.colors.selectedItemGrey};
  width: 1000%;
`;

export const StyledMail = styled.a<{ icon: string }>`
  text-decoration: none;
  height: 4.3rem;
  width: 4.3rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
`;

export const EmailWrapper = styled.div`
  transform: translateY(-20%);
  display: flex;
  align-items: center;
  justify-content: space-between;s
`;
