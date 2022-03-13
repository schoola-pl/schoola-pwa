import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useAddSpottedMutation, useDeleteSpottedMutation, useDeleteSpottedProposalMutation, useProposeSpottedMutation } from 'store';
import { roles } from 'routes';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';

interface SpottedContextTypes {
  decideAboutSpott: (message: string) => void;
  approveSpott: (spottId: number, message: string) => void;
  disapproveSpott: (spottId: number) => void;
  deleteSpott: (spottId: number) => void;
}

const SpottedContext = createContext<SpottedContextTypes>({
  decideAboutSpott: () => {
    throw new Error('decideAboutSpott is not implemented');
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
  const [addSpott] = useAddSpottedMutation();
  const [proposeSpott] = useProposeSpottedMutation();
  const [deleteProposal] = useDeleteSpottedProposalMutation();
  const [deleteSpottRecord] = useDeleteSpottedMutation();

  const addSpottedPost = async (message: string) => {
    if (!user) return;
    const { schoolId: schoolIdNP } = user;
    const schoolId = String(schoolIdNP);
    const response = await axios.post<{ likes: number; userIds: [] }, { data: { data: { id: string } } }>(
      `${process.env.REACT_APP_BACKEND_BASE_URL}/likes`,
      { data: { likes: 0, userIds: [] } },
      {
        headers: {
          Authorization: `Bearer ${getJWT()}`
        }
      }
    );
    const {
      data: {
        data: { id }
      }
    } = response;
    await addSpott({
      schoolId,
      message,
      likes: parseInt(id)
    });
  };

  const decideAboutSpott = async (message: string) => {
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
        await addSpottedPost(message);
        break;
      default:
        await proposeSpott({
          schoolId,
          message
        });
        break;
    }
  };

  const approveSpott = async (spottId: number, message: string) => {
    deleteProposal({
      spottId
    });
    await addSpottedPost(message);
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
    decideAboutSpott,
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
