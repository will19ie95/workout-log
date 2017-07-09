import { WorkoutLogAppPage } from './app.po';

describe('workout-log-app App', () => {
  let page: WorkoutLogAppPage;

  beforeEach(() => {
    page = new WorkoutLogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
