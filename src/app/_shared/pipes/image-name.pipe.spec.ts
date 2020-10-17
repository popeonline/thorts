import { ImageNamePipe } from './image-name.pipe';

describe('ImageNamePipe', () => {
  
  it('create an instance', () => {
    const pipe = new ImageNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a correctly formated image name', () => {
    const pipe = new ImageNamePipe();
    expect(pipe.transform('Darth Vader')).toBe('darth-vader');
  });

});
