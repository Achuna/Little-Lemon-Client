import { fetchAPI } from '../api/api';

export function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

export function updateTimes(state, action) {
  if (action.type === 'UPDATE_TIMES') {
    return fetchAPI(new Date(action.date));
  }
  return state;
}
