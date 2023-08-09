const BMI_CLASSIFICATION = {
  lower_healthy: 18.5,
  upper_healthy: 24.9,
  overweight: 29.9,
};

function getWeightClassification(bmi) {
  if (bmi < BMI_CLASSIFICATION.lower_healthy) {
    return 'underweight';
  }

  if (bmi <= BMI_CLASSIFICATION.upper_healthy) {
    return 'a healthy weight';
  }

  if (bmi <= BMI_CLASSIFICATION.overweight) {
    return 'overweight';
  }

  return 'obese';
}

function getIdealWeightRange(height, system) {
  if (system === 'imperial') {
    const lowerLimit = (height ** 2)/703 * BMI_CLASSIFICATION.lower_healthy;
    const upperLimit = (height ** 2)/703 * BMI_CLASSIFICATION.upper_healthy;

    return [lowerLimit, upperLimit];
  }
  
  const lowerLimit = ((height/100) ** 2) * BMI_CLASSIFICATION.lower_healthy;
  const upperLimit = ((height/100) ** 2) * BMI_CLASSIFICATION.upper_healthy;

  return [lowerLimit, upperLimit];
}

function calculateBMI(height, weight, system) {
  if (system === 'imperial') {
    return (weight/(height ** 2)) * 703;
  }

  return weight/((height/100) ** 2);
}

export {
  getWeightClassification,
  getIdealWeightRange,
  calculateBMI,
}