import { Tab } from "./tab.model";


describe('Tab', () => {
  it('should create an instance', () => {
    const tab: Tab = {
      name: "mytab",
      icon: "an-icon",
      label: "My Tab"
    }
    expect(tab).toBeTruthy();
  });
});