import React, { createContext, useContext } from 'react';
import { useDeleteMeetingMutation } from 'store';

interface MeetingContextTypes {
  deleteMeeting: (id: number) => void;
}

const MeetingContext = createContext<MeetingContextTypes>({
  deleteMeeting: () => {
    throw new Error('deleteMeeting is not implemented');
  }
});
export const MeetingProvider: React.FC = ({ children }) => {
  const [deleteRecordInDB] = useDeleteMeetingMutation();

  const deleteMeeting = (id: number) => {
    deleteRecordInDB({
      id
    });
  };

  const values = {
    deleteMeeting
  };
  return <MeetingContext.Provider value={values}>{children}</MeetingContext.Provider>;
};

export const useMeeting = (): MeetingContextTypes => {
  const Meeting = useContext(MeetingContext);
  if (!Meeting) {
    throw new Error('useMeeting must be used within an MeetingProvider');
  }
  return Meeting;
};
