import { initializeTimes, updateTimes } from '../utils/bookingReducer';
import { fetchAPI } from '../api/api';

jest.mock('../api/api');

describe('Booking Reducer API Tests', () => {
  beforeEach(() => jest.clearAllMocks());

  test('initializeTimes calls fetchAPI and returns available times', () => {
    const mockTimes = ['17:00', '18:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledTimes(1);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes calls fetchAPI with correct date and returns available times', () => {
    const mockDate = '2025-10-14';
    const mockTimes = ['17:00', '19:00'];
    fetchAPI.mockReturnValue(mockTimes);

    const result = updateTimes([], { type: 'UPDATE_TIMES', date: mockDate });

    expect(fetchAPI).toHaveBeenCalledWith(new Date(mockDate));
    expect(result).toEqual(mockTimes);
  });

  test('updateTimes returns previous state if action type is not UPDATE_TIMES', () => {
    const previousState = ['17:00', '18:00'];
    const result = updateTimes(previousState, { type: 'INVALID' });
    expect(result).toEqual(previousState);
  });
});
