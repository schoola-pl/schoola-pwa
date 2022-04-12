import React from 'react';
import { storeRoot, useGetPsychosQuery } from 'store';
import { useSelector } from 'react-redux';

interface props {
  handleChangePsycho: (e: any) => void;
}

const PsychoList: React.FC<props> = ({ handleChangePsycho }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const psychos = useGetPsychosQuery({
    schoolId: user?.schoolId || null
  });

  return (
    <select onChange={handleChangePsycho} data-testid="psycho-select">
      <option value="" selected disabled hidden>
        {psychos.isLoading ? 'Pobieram dane...' : psychos.data && psychos.data.length > 0 ? 'Wybierz psychologa' : 'Brak psychologów!'}
      </option>
      {psychos.data &&
        psychos.data.map((psycho) =>
          psycho.working_hours ? (
            <option key={psycho.id} value={psycho.id}>
              {psycho.first_name} {psycho.last_name}
            </option>
          ) : null
        )}
    </select>
  );
};

export default PsychoList;
