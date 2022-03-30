import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('test 1', async () => {
    await render(AppComponent, {
      componentProperties: {
        test: true,
      },
    });

    expect(screen.getByText('hello')).toBeDefined();
  });

  it('test 2', async () => {
    await render(AppComponent, {
      componentProperties: {
        test: false,
      },
    });

    expect(screen.getByText('siema')).toBeDefined();
  });
});
