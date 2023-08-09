import { calculateBMI, getIdealWeightRange, getWeightClassification } from '@/utils/body-mass-index';

function approx(n1, n2) {
	return (n1 <= n2 + 0.1) && (n1 >= n2 - 0.1);
}

describe('calculateBMI', () => {
  it('calculates the correct body mass index', () => {
    const height = 172;
    const weight = 65;

    const bmi = calculateBMI(height, weight);
    expect(approx(bmi, 21.9)).toEqual(true);
  });

  it('calculates the correct body mass index using imperial system', () => {
    const height = (5 * 12) + 11; // 5ft 11in
    const weight = 160;

    const bmi = calculateBMI(height, weight, 'imperial');

    expect(approx(bmi, 22.3)).toEqual(true);
  });
});

describe('getIdealWeightRange', () => {
  it('returns an array with ideal weight range', () => {
    const height = 172;

    const [lower, upper] = getIdealWeightRange(height);

    expect(approx(lower, 54.73)).toEqual(true);
    expect(approx(upper, 73.66)).toEqual(true);
  });

  it('returns an array with ideal weight range using imperial system', () => {
    const height = (5 * 12) + 11; // 5ft 11in

    const [lower, upper] = getIdealWeightRange(height, 'imperial');

    expect(approx(lower, 132.7)).toEqual(true);
    expect(approx(upper, 178.6)).toEqual(true);
  });
});

describe('getWeightClassification', () => {
  it('returns underweight when bmi is less than 18.5', () => {
    const bmi = 18.4;

    expect(getWeightClassification(bmi)).toBe('underweight');
  });

  it('returns a healthy weight when bmi is between 18.5 and 24.9', () => {
    const bmi1 = 18.5;
    const bmi2 = 24.9;

    expect(getWeightClassification(bmi1)).toBe('a healthy weight');
    expect(getWeightClassification(bmi2)).toBe('a healthy weight');
  });

  it('returns overweight when bmi is between 25.0 and 29.9', () => {
    const bmi1 = 25.0;
    const bmi2 = 29.9;

    expect(getWeightClassification(bmi1)).toBe('overweight');
    expect(getWeightClassification(bmi2)).toBe('overweight');
  });

  it('returns obese when bmi is greater than 29.9', () => {
    const bmi = 30.0;

    expect(getWeightClassification(bmi)).toBe('obese');
  });
});
