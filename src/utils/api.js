import ky from 'ky';

const apiClient = ky.create({
  prefixUrl: 'http://superiod.online:3001',
});

export const apiFetchGameState = () => (
  apiClient.get('game').json()
);

export const apiMakeMove = (index) => (
  apiClient.post('move', { searchParams: { index: index } }).json()
);

export const apiResetGame = () => (
  apiClient.post('reset').json()
);
