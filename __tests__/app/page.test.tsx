import { render, screen } from '@testing-library/react';
import IndexPage from '@/app/page';

describe('IndexPage', () => {
  describe('section 1', () => {
    it('renders the first section heading', () => {
      render(<IndexPage />)
  
      const heading = screen.getByRole('heading', {
        name: /Body Mass Index Calculator/i,
      })
  
      expect(heading).toBeInTheDocument();
    });
  });
  
  describe('section 2', () => {
    it('renders the second section heading', () => {
      render(<IndexPage />)

      const heading = screen.getByRole('heading', {
        name: /What your BMI result means/i,
      })

      expect(heading).toBeInTheDocument();
    });

    it('renders the first topic title', () => {
      render(<IndexPage />)

      const title = screen.getByRole('heading', {
        name: /Healthy eating/i,
      })

      expect(title).toBeInTheDocument();
    });

    it('renders the second topic title', () => {
      render(<IndexPage />)

      const title = screen.getByRole('heading', {
        name: /Regular exercise/i,
      })

      expect(title).toBeInTheDocument();
    });

    it('renders the third topic title', () => {
      render(<IndexPage />)

      const title = screen.getByRole('heading', {
        name: /Adequate sleep/i,
      })

      expect(title).toBeInTheDocument();
    });
  });
});
