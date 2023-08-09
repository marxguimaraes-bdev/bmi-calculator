import { render, screen } from '@testing-library/react';
import BMIDisplay from '@/app/components/bmi-display';

describe('BMIDisplay', () => {
  it('renders a welcome message', () => {
    render(<BMIDisplay />)

    const div = screen.getByText(/Welcome/i);

    expect(div).toBeInTheDocument()
  });

  it('renders a specific message if bmi is a number', () => {
    render(<BMIDisplay bmi={20} />)

    const div = screen.getByText(/Your BMI is.../i);

    expect(div).toBeInTheDocument()
  });
});
