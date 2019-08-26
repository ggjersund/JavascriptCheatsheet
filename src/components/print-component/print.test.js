import { printMe } from './print';


// create a function into global context for Jest
global.console = {
  log: jest.fn(),
  info: jest.fn(),
  error: jest.fn()
}


test('Should output a console log', () => {

  printMe();

  expect(global.console.log).toHaveBeenCalledWith(
    'I get called from print.js!'
  )

})
