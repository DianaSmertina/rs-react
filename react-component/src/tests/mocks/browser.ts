import { setupWorker } from 'msw';
import { handlers } from './handler';

export const server = setupWorker(...handlers);
