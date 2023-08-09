import { render, screen } from '@testing-library/react';
import SmallCard from '@/components/small-card';

describe('Card', () => {
  it('renders the title', () => {
    render(<SmallCard title="The fox and the dog"/>);

    const heading = screen.getByRole('heading', {
      name: /The fox and the dog/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<SmallCard>The quick lazy fox jumps over the brown dog</SmallCard>);

    const content = screen.getByText(/The quick lazy fox jumps over the brown dog/i);

    expect(content).toBeInTheDocument();
  });
});
