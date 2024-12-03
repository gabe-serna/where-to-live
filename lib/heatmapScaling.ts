export default function HeatmapScaling(value: number) {
  const red = getRed(value);
  const { green, blue } = getGreenAndBlue(value);
  const intensity = getIntensity(value);
  return { red, green, blue, intensity };
}

function getRed(value: number) {
  if (value >= 0.75) return 2;
  else if (value >= 0.5) return 3 * value - 0.25;
  else if (value >= 0.25) return 1.6 * value + 0.45;
  else if (value >= 0) return 2.2 * value + 0.3;
  else return 0;
}

function getGreenAndBlue(value: number) {
  if (value >= 0.75) return { green: value - 0.25, blue: 0.5 };
  else if (value >= 0.5) {
    const newValue = 0.4 * value + 0.2;
    return { green: newValue, blue: newValue };
  } else if (value >= 0.25) return { green: 0.4, blue: 0.4 };
  else if (value >= 0) {
    const newValue = 0.6 * value + 0.25;
    return { green: newValue, blue: newValue };
  } else return { green: 0, blue: 0 };
}

function getIntensity(value: number) {
  if (value >= 0.5) return 4.8 ** (value - 0.13) - 0.9;
  else if (value >= 0.25) return 10.988 * (value - 0.25) ** 2 + 0.2;
  else if (value >= 0) return 0.4 * value + 0.1;
  else return 0;
}
