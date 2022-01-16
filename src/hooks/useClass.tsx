import React, { createContext, useContext, useState } from 'react';
import { getJWT } from '../helpers/jwt';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { storeRoot, useAddClassMutation, useRemoveClassMutation } from '../store';
import { authUser } from '../types/auth';

interface ClassContextTypes {
  // Informations
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[];
  classId: number | null;
  className: string;
  // Booleans
  isCreated: boolean;
  isLoading: boolean;
  isError: boolean;
  // Functions
  addClassProtocol: ({ classLevel, className, usersCount }: { classLevel: number; className: string; usersCount: string }) => Promise<void>;
  restoreClass: () => void;
}

const ClassContext = createContext<ClassContextTypes>({
  users: [],
  className: '',
  classId: null,
  isCreated: false,
  isLoading: false,
  isError: false,
  addClassProtocol: async () => {
    throw new Error('ClassContext: addClassProtocol is not implemented');
  },
  restoreClass: async () => {
    throw new Error('ClassContext: restoreClass is not implemented');
  }
});
export const ClassProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<Partial<authUser[]>>([]);
  const [className, setClassName] = useState('Nie utworzono klasy.');
  const [isCreated, setIsCreated] = useState(false);
  const [classId, setClassId] = useState<number | null>(null);
  const user = useSelector((state: storeRoot) => state.user);
  const [addClass, { isLoading: isLoadingAdding, isError: isErrorAdding }] = useAddClassMutation();
  const [removeClass, { isLoading: isLoadingRemoving, isError: isErrorRemoving }] = useRemoveClassMutation();
  const [isLoading, setLoadingState] = useState(false);

  const checkDoesClassExist = async (className: string, classLevel: number) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/classes?filters[className][$eq]=${className}&filters[classLevel][$eq]=${classLevel}&fields[0]=classLevel&fields[1]=className`,
        {
          headers: {
            Authorization: `Bearer ${getJWT()}`
          }
        }
      );
      return res.data.data.length > 0;
    } catch (err) {
      return true;
    }
  };

  const addClassProtocol = async ({ classLevel, className, usersCount }: { classLevel: number; className: string; usersCount: string }) => {
    setLoadingState(true);
    const prepared = { className: className.toUpperCase(), classLevel };
    const decision = await checkDoesClassExist(prepared.className, prepared.classLevel);
    if (!decision) {
      const res = await addClass({
        className: prepared.className,
        classLevel: prepared.classLevel,
        schoolId: user?.schoolId || null
      });
      const data = res as { data: { data: { id: number } } };
      setClassId(data.data.data.id);
      const name = `Klasa ${prepared.classLevel}${prepared.className}`;
      setClassName(name);
      const emptyUsers = new Array(parseInt(usersCount)).fill({});
      setUsers(emptyUsers);
      setIsCreated(true);
    } else {
      setClassName('Taka klasa już istnieje!');
      setIsCreated(false);
    }
    setLoadingState(false);
  };

  const restoreClass = () => {
    removeClass({
      classId
    });
    setClassName('Nie utworzono klasy.');
    setUsers([]);
    setIsCreated(false);
  };

  const values = {
    addClassProtocol,
    restoreClass,
    users,
    isError: isErrorAdding || isErrorRemoving,
    isLoading: isLoadingAdding || isLoadingRemoving || isLoading,
    isCreated,
    className,
    classId
  };
  return <ClassContext.Provider value={values}>{children}</ClassContext.Provider>;
};

export const useClass = (): ClassContextTypes => {
  const Class = useContext(ClassContext);
  if (!Class) {
    throw new Error('useClasss must be used within an ClassProvider');
  }
  return Class;
};
