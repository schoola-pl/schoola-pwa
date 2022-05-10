import { useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { storeRoot, useGetInterestedsQuery } from 'store';
import { Heading } from 'views/User/Settings/SocialLinks/SocialLinks.styles';
import { useModal } from '../../../../hooks/useModal';
import { useForm } from 'react-hook-form';
import { InfoWrapper, InterestedCard, LinksList, ModalWrapper, PageWrapper, StyledForm, StyledSelect } from '../SocialLinks/SocialLinks.styles';
import Button from '../../../../components/atoms/Button/Button';
import { getInterestedsByIDs } from '../../../../helpers/interesteds';
import { upperFirstLetter } from '../../../../helpers/text';

const Interests = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { removeInterested, addInterested } = useUser();
  const interesteds = useGetInterestedsQuery({});
  const { closeModal, openModal } = useModal();
  const { register, handleSubmit, reset } = useForm();

  const handleAddInteresteds = (data: { id: number }) => {
    addInterested(data);
    closeModal();
    reset();
  };

  return (
    <PageWrapper>
      <InfoWrapper>
        <Heading>Edytuj swoje zainteresowania</Heading>
        <button
          onClick={() =>
            openModal(
              <ModalWrapper>
                <StyledForm onSubmit={handleSubmit(handleAddInteresteds)}>
                  <StyledSelect {...register('id', { required: true })}>
                    {interesteds.data &&
                      interesteds.data.map((option) => {
                        const chosen = getInterestedsByIDs(user?.TextInteresteds || '', interesteds?.data || [], true);
                        if (typeof chosen[0] === 'object' && !chosen.includes({ id: option.id, name: option.name }))
                          return <option value={option.id}>{option.name}</option>;
                      })}
                  </StyledSelect>
                  <div>
                    <Button isRed onClick={closeModal}>
                      Anuluj
                    </Button>
                    <Button>Dodaj</Button>
                  </div>
                </StyledForm>
              </ModalWrapper>,
              'Dodaj nowy link'
            )
          }
        >
          Dodaj
        </button>
      </InfoWrapper>
      {interesteds.data && getInterestedsByIDs(user?.TextInteresteds || '', interesteds.data).length > 0 ? (
        getInterestedsByIDs(user?.TextInteresteds || '', interesteds.data, true).map((interested) => (
          <LinksList key={typeof interested === 'string' ? interested : interested.name}>
            <InterestedCard>
              {upperFirstLetter(typeof interested === 'string' ? interested : interested.name)}
              <Button isRed onClick={() => removeInterested(typeof interested === 'object' ? interested.id : 0)}>
                X
              </Button>
            </InterestedCard>
          </LinksList>
        ))
      ) : (
        <Heading small>Brak zainteresowań!</Heading>
      )}
    </PageWrapper>
  );
};
export default Interests;
