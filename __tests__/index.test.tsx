import { render, screen } from '@testing-library/react';
import IndexPage from '@/app/page';

describe('IndexPage', () => {
  it('renders a heading', () => {
    render(<IndexPage />)

    const heading = screen.getByRole('heading', {
      name: /Body Mass Index Calculator/i,
    })

    expect(heading).toBeInTheDocument()
  });
});

