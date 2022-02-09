export const getInterestedsByIDs = (ids: string, allInteresteds: { id: number; attributes: { name: string } }[]) => {
  const interestedsArray = ids.split(';');
  return interestedsArray.map((id) => {
    const interested = allInteresteds.find((interested) => interested.id === Number(id));
    return interested ? interested.attributes.name : '';
  });
};
