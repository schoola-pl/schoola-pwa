export const getInterestedsByIDs = (ids: string, allInteresteds: { id: number; name: string }[], withIds?: boolean) => {
  const interestedsArray = ids.split(';');
  return ids !== ''
    ? interestedsArray.map((id) => {
        const interested = allInteresteds.find((interested) => interested.id === Number(id));
        return !withIds
          ? interested
            ? interested.name
            : ''
          : {
              id: interested?.id || 0,
              name: interested?.name || ''
            };
      })
    : [];
};
