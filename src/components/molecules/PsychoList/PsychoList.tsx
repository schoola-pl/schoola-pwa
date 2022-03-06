import React from 'react';
import { useGetPsychosQuery } from 'store';

interface props {
  handleChangePsycho: (e: any) => void;
}

const PsychoList: React.FC<props> = ({ handleChangePsycho }) => {
  const psychos = useGetPsychosQuery({});

  return (
    <select onChange={handleChangePsycho}>
      <option value="" selected disabled hidden>
        {psychos.isLoading ? 'Pobieram dane...' : 'Wybierz psychologa'}
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
