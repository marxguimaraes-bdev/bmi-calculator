import { render, screen } from '@testing-library/react';
import Card from '@/components/card';

describe('Card', () => {
  it('renders the title', () => {
    render(<Card title="The fox and the dog"/>);

    const heading = screen.getByRole('heading', {
      name: /The fox and the dog/i,
    })

    expect(heading).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Card>The quick lazy fox jumps over the brown dog</Card>);

    const content = screen.getByText(/The quick lazy fox jumps over the brown dog/i);

    expect(content).toBeInTheDocument();
  });
});
