import { PassportNumberPipe } from './passport-number.pipe';

describe('PassportNumberPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PassportNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
