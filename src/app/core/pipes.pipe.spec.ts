import { pipe } from 'rxjs';
import { PipesPipe } from './pipes.pipe';
describe('PipesPipe', () => {
  it('create an instance', () => {
    const pipe = new PipesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should be PipesPipe',()=>{
    const pipe=new PipesPipe();
    pipe.transform('value', 'args');
  expect(pipe).toBeDefined();
  })
  });
