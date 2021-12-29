import { setupWorker } from 'msw';
import auth from './reducers/auth';

const reducers = [...auth];

export default setupWorker(...reducers);
