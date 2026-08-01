import type { PaperProduct } from '@/lib/products';

export type GsmRange = {
  min: number;
  max: number;
};

export type EstimateInputs = {
  gsm: number;
  rollWidthCm: number;
  rollLengthM: number;
  rollCount: number;
};

export type EstimateResult = {
  totalWeightKg: number;
  totalWeightMt: number;
  totalLinearM: number;
};

export function parseGsmRange(product: PaperProduct): GsmRange | null {
  const gsmSpec = product.specs.find(
    (spec) => spec.label.includes('GSM') || spec.label.includes('Basis Weight'),
  );

  if (gsmSpec) {
    const match = gsmSpec.value.match(/(\d+)\s*(?:to|–|-)\s*(\d+)/i);
    if (match) {
      return { min: Number(match[1]), max: Number(match[2]) };
    }
  }

  const highlightMatch = product.highlight.match(/(\d+)\s*[–-]\s*(\d+)/);
  if (highlightMatch) {
    return { min: Number(highlightMatch[1]), max: Number(highlightMatch[2]) };
  }

  return null;
}

export function defaultGsm(product: PaperProduct): number {
  const range = parseGsmRange(product);
  if (!range) {
    return 120;
  }

  return Math.round((range.min + range.max) / 2);
}

export function estimateOrderWeight({
  gsm,
  rollWidthCm,
  rollLengthM,
  rollCount,
}: EstimateInputs): EstimateResult {
  const widthM = rollWidthCm / 100;
  const totalLinearM = rollLengthM * rollCount;
  const totalWeightKg = (gsm * widthM * totalLinearM) / 1000;

  return {
    totalWeightKg,
    totalWeightMt: totalWeightKg / 1000,
    totalLinearM,
  };
}

export function rollsFromTargetWeight(
  gsm: number,
  rollWidthCm: number,
  rollLengthM: number,
  targetWeightKg: number,
): number {
  const singleRollKg = estimateOrderWeight({
    gsm,
    rollWidthCm,
    rollLengthM,
    rollCount: 1,
  }).totalWeightKg;

  if (singleRollKg <= 0) {
    return 0;
  }

  return Math.ceil(targetWeightKg / singleRollKg);
}

export function formatWeightKg(value: number): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
}

export function formatWeightMt(value: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatLinearM(value: number): string {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value);
}
