import { getInterestedsByIDs } from '../../../helpers/interesteds';

describe('Functions > Interesteds', () => {
  it('Should get interested by specified id', () => {
    const randomIds = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100));
    const randomIdsString = randomIds.join(';');
    const preparedIdsObjects = randomIds.map((id) => ({ id, name: 'BlahBlahBlah' }));
    const result = getInterestedsByIDs(randomIdsString, preparedIdsObjects);
    expect(result).toHaveLength(randomIds.length);
    expect(result).toStrictEqual(preparedIdsObjects.map((obj) => obj.name));
  });
  it('Should return empty array if no ids provided', () => {
    const result = getInterestedsByIDs('', []);
    expect(result).toHaveLength(1);
    expect(result).toStrictEqual(['']);
  });
});
