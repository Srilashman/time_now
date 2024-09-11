
const get_datetime = require('../script');

describe('get_datetime function', () => {
    beforeEach(() => {
        // Mocking the current date and time using Date
        const mockDate = new Date(2023, 8, 10, 7, 5, 9); // September 10, 2023, 07:05:09
        global.Date = jest.fn(() => mockDate); // Overriding the Date constructor
      });
  test('should return correct date and time format', () => {
    const [date, time] = get_datetime();

    expect(date).toBe('10/9/2023');  // Expected date
    expect(time).toBe('07 : 05 : 09');  // Expected time
  });
});

