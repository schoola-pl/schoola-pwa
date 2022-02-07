import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';

const Form = styled.form`
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

const NotificationContentWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.selectedItemGrey};

  h1 {
    text-align: left;
    margin-right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  p {
    margin-left: 5rem;
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 2rem;

  h1 {
    padding-left: 2rem;
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

const NotificationAction = () => {
  return (
    <Form>
      <NotificationContentWrapper>
        <InfoWrapper>
          <h1>Pytanie:</h1>
          <BoxWrapper>
            <EditBox icon={AcceptIcon} />
            <CancelBox icon={CancelIcon} />
          </BoxWrapper>
        </InfoWrapper>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dolore ipsum, sin?</p>
      </NotificationContentWrapper>
    </Form>
  );
};

export default NotificationAction;
