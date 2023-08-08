import { render, screen } from '@testing-library/react';
import Calculator from '@/app/components/calculator';

describe('Calculator', () => {
  it('renders properly', () => {
    render(<Calculator />)

    const div = screen.getByText(/Enter your details below/i);

    expect(div).toBeInTheDocument()
  });
});

