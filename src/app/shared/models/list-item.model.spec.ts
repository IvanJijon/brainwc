import { Item } from './list-item.model';

describe('Item', () => {
  it('should create an instance', () => {
    const item: Item = {
      title: "",
      subtitle: "",
      description: ""
    }
    expect(item).toBeTruthy();
  });
});