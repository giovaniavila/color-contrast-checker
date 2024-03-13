// script.js dentro da pasta 'test'
import {
  calculateContrast,
  checkContrastCompliance,
} from "../package/index.js";

const colorBlack = "#000000";
const colorWhite = "#FFFFFF";

const contrastRatio = calculateContrast(colorBlack, colorWhite);
console.log(`Contrast ratio: ${contrastRatio}`);

const complianceLevel = "AA";
const isCompliant = checkContrastCompliance(
  colorBlack,
  colorWhite,
  complianceLevel
);
console.log(`Compliance with ${complianceLevel}: ${isCompliant}`);
