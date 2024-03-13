function calculateContrast(color1, color2) {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const luminance1 = calculateLuminance(rgb1);
  const luminance2 = calculateLuminance(rgb2);
  const contrastRatio =
    (Math.max(luminance1, luminance2) + 0.05) /
    (Math.min(luminance1, luminance2) + 0.05);

  return contrastRatio.toFixed(2);
}

function checkContrastCompliance(color1, color2, complianceLevel) {
  const contrastRatio = calculateContrast(color1, color2);

  if (complianceLevel === "AA") {
    return contrastRatio >= 4.5;
  } else if (complianceLevel === "AAA") {
    return contrastRatio >= 7;
  } else {
    throw new Error("Invalid compliance level. Please use 'AA' or 'AAA'.");
  }
}

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function calculateLuminance(rgb) {
  const { r, g, b } = rgb;
  const sRGB = [r, g, b].map((v) => {
    const sr = v / 255;
    return sr <= 0.03928 ? sr / 12.92 : ((sr + 0.055) / 1.055) ** 2.4;
  });
  return sRGB[0] * 0.2126 + sRGB[1] * 0.7152 + sRGB[2] * 0.0722;
}

export { calculateContrast, checkContrastCompliance };
