import { HighlightPipesPipe } from './highlight.pipes.pipe';

describe('HighlightPipesPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightPipesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should be created',()=>{
    
  //   const pipe=new HighlightPipesPipe();
  //   // const value={replace:''}
  //   pipe.transform('value', 'args');
  // expect(pipe).toBeDefined();
  });
  it('should tranform highlight pipe', () => {
    const pipe = new HighlightPipesPipe;
    pipe.transform('1234', '12')
    pipe.transform('1234', '')
    pipe.transform('1234', '98')
    expect(pipe).toBeDefined
  })
});
