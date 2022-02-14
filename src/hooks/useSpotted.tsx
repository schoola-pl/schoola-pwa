import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useAddSpottMutation, useDeleteSpottMutation, useDeleteSpottProposalMutation, useProposeSpottMutation } from 'store';
import { roles } from 'routes';

interface SpottedContextTypes {
  addSpottProtocol: (message: string) => void;
  approveSpott: (spottId: number, message: string) => void;
  disapproveSpott: (spottId: number) => void;
  deleteSpott: (spottId: number) => void;
}

const SpottedContext = createContext<SpottedContextTypes>({
  addSpottProtocol: () => {
    throw new Error('addSpottProtocol is not implemented');
  },
  approveSpott: () => {
    throw new Error('approveSpott is not implemented');
  },
  disapproveSpott: () => {
    throw new Error('disapproveSpott is not implemented');
  },
  deleteSpott: () => {
    throw new Error('deleteSpott is not implemented');
  }
});
export const SpottedProvider: React.FC = ({ children }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [addSpott] = useAddSpottMutation();
  const [proposeSpott] = useProposeSpottMutation();
  const [deleteProposal] = useDeleteSpottProposalMutation();
  const [deleteSpottRecord] = useDeleteSpottMutation();

  const addSpottProtocol = async (message: string) => {
    if (!user) return;
    const { schoolId: schoolIdNP, TextRole } = user;
    const schoolId = String(schoolIdNP);
    switch (TextRole) {
      case roles.student:
        await proposeSpott({
          schoolId,
          message
        });
        break;
      case roles.moderator:
        await addSpott({
          schoolId,
          message
        });
        break;
      default:
        await proposeSpott({
          schoolId,
          message
        });
        break;
    }
  };

  const approveSpott = (spottId: number, message: string) => {
    if (!user) return;
    const { schoolId: schoolIdNP } = user;
    const schoolId = String(schoolIdNP);

    deleteProposal({
      spottId
    });
    addSpott({
      schoolId,
      message
    });
  };

  const disapproveSpott = (spottId: number) => {
    deleteProposal({
      spottId
    });
  };

  const deleteSpott = async (spottId: number) => {
    await deleteSpottRecord({
      spottId
    });
  };

  const values = {
    addSpottProtocol,
    approveSpott,
    disapproveSpott,
    deleteSpott
  };
  return <SpottedContext.Provider value={values}>{children}</SpottedContext.Provider>;
};

export const useSpotted = (): SpottedContextTypes => {
  const Spotted = useContext(SpottedContext);
  if (!Spotted) {
    throw new Error('useSpotted must be used within an SpottedProvider');
  }
  return Spotted;
};
