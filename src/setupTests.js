import { jest } from '@jest/globals';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}));
