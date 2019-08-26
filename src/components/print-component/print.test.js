import printMe from './print';


global.console = {
  log: jest.fn()
}

test('should output a console log', () => {
  printMe();
  expect(global.console.log).toHaveBeenCalledWith(
    'I get called from print.js!'
  );
})

test('should always pass test', () => {
  expect(true).toBe(true);
  // The code below will fail the
  // expect(true).toBe(false);
})
