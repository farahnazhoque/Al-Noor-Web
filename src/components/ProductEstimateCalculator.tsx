'use client';

import { useEffect, useId, useRef, useState } from 'react';
import StarBorderButton from '@/components/StarBorderButton';
import type { PaperProduct } from '@/lib/products';
import {
  defaultGsm,
  estimateOrderWeight,
  formatLinearM,
  formatWeightKg,
  formatWeightMt,
  parseGsmRange,
  rollsFromTargetWeight,
  type EstimateResult,
} from '@/lib/productCalculator';

type ProductEstimateCalculatorProps = {
  product: PaperProduct;
};

type CalcMode = 'rolls' | 'weight';

export default function ProductEstimateCalculator({ product }: ProductEstimateCalculatorProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const gsmRange = parseGsmRange(product);

  const [mode, setMode] = useState<CalcMode>('rolls');
  const [gsm, setGsm] = useState(defaultGsm(product));
  const [rollWidthCm, setRollWidthCm] = useState('100');
  const [rollLengthM, setRollLengthM] = useState('5000');
  const [rollCount, setRollCount] = useState('10');
  const [targetWeightMt, setTargetWeightMt] = useState('5');
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [rollsNeeded, setRollsNeeded] = useState<number | null>(null);

  useEffect(() => {
    setGsm(defaultGsm(product));
    setResult(null);
    setRollsNeeded(null);
  }, [product.slug]);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const handleCalculate = () => {
    const width = Number(rollWidthCm);
    const length = Number(rollLengthM);

    if (!gsm || width <= 0 || length <= 0) {
      setResult(null);
      setRollsNeeded(null);
      return;
    }

    if (mode === 'rolls') {
      const count = Math.max(1, Number(rollCount) || 1);
      setResult(
        estimateOrderWeight({
          gsm,
          rollWidthCm: width,
          rollLengthM: length,
          rollCount: count,
        }),
      );
      setRollsNeeded(null);
      return;
    }

    const targetKg = (Number(targetWeightMt) || 0) * 1000;
    if (targetKg <= 0) {
      setResult(null);
      setRollsNeeded(null);
      return;
    }

    const rolls = rollsFromTargetWeight(gsm, width, length, targetKg);
    setRollsNeeded(rolls);
    setResult(
      estimateOrderWeight({
        gsm,
        rollWidthCm: width,
        rollLengthM: length,
        rollCount: rolls,
      }),
    );
  };

  return (
    <>
      <StarBorderButton variant="secondary" className="product-bento__calc-btn" onClick={openDialog}>
        Calculate Estimate
      </StarBorderButton>

      <dialog ref={dialogRef} className="estimate-dialog" aria-labelledby={titleId}>
        <form
          method="dialog"
          className="estimate-dialog__panel"
          onSubmit={(event) => {
            event.preventDefault();
            handleCalculate();
          }}
        >
          <header className="estimate-dialog__header">
            <div>
              <span className="estimate-dialog__eyebrow">Order Estimator</span>
              <h2 id={titleId} className="title-md estimate-dialog__title">
                Calculate {product.name} Volume
              </h2>
              <p className="body-sm estimate-dialog__intro">
                Enter roll specs for an indicative weight estimate.
              </p>
            </div>
            <button type="button" className="estimate-dialog__close" onClick={closeDialog} aria-label="Close">
              ×
            </button>
          </header>

          <div className="estimate-dialog__body">
            <div className="estimate-dialog__field">
              <label htmlFor={`${titleId}-gsm`}>Basis Weight (GSM)</label>
              <input
                id={`${titleId}-gsm`}
                type="number"
                min={gsmRange?.min ?? 40}
                max={gsmRange?.max ?? 350}
                value={gsm}
                onChange={(event) => setGsm(Number(event.target.value))}
                required
              />
              {gsmRange ? (
                <span className="estimate-dialog__hint">{gsmRange.min}–{gsmRange.max} GSM</span>
              ) : (
                <span className="estimate-dialog__hint">Target GSM</span>
              )}
            </div>

            <div className="estimate-dialog__field">
              <label htmlFor={`${titleId}-width`}>Roll Width (cm)</label>
              <input
                id={`${titleId}-width`}
                type="number"
                min="1"
                step="0.1"
                value={rollWidthCm}
                onChange={(event) => setRollWidthCm(event.target.value)}
                required
              />
            </div>

            <div className="estimate-dialog__field">
              <label htmlFor={`${titleId}-length`}>Roll Length (m)</label>
              <input
                id={`${titleId}-length`}
                type="number"
                min="1"
                value={rollLengthM}
                onChange={(event) => setRollLengthM(event.target.value)}
                required
              />
            </div>

            {mode === 'rolls' ? (
              <div className="estimate-dialog__field">
                <label htmlFor={`${titleId}-rolls`}>Number of Rolls</label>
                <input
                  id={`${titleId}-rolls`}
                  type="number"
                  min="1"
                  value={rollCount}
                  onChange={(event) => setRollCount(event.target.value)}
                  required
                />
              </div>
            ) : (
              <div className="estimate-dialog__field">
                <label htmlFor={`${titleId}-target`}>Target Weight (MT)</label>
                <input
                  id={`${titleId}-target`}
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={targetWeightMt}
                  onChange={(event) => setTargetWeightMt(event.target.value)}
                  required
                />
              </div>
            )}

            <fieldset className="estimate-dialog__mode">
              <legend className="estimate-dialog__legend">Estimate by</legend>
              <label className="estimate-dialog__radio">
                <input
                  type="radio"
                  name="calc-mode"
                  checked={mode === 'rolls'}
                  onChange={() => setMode('rolls')}
                />
                Rolls
              </label>
              <label className="estimate-dialog__radio">
                <input
                  type="radio"
                  name="calc-mode"
                  checked={mode === 'weight'}
                  onChange={() => setMode('weight')}
                />
                Weight (MT)
              </label>
            </fieldset>
          </div>

          {result ? (
            <div className="estimate-dialog__results" aria-live="polite">
              <p className="estimate-dialog__results-label">Estimated Order</p>
              <div className="estimate-dialog__stats">
                <div>
                  <span>Total Weight</span>
                  <strong>{formatWeightKg(result.totalWeightKg)} kg</strong>
                  <em>{formatWeightMt(result.totalWeightMt)} MT</em>
                </div>
                <div>
                  <span>Linear Meters</span>
                  <strong>{formatLinearM(result.totalLinearM)} m</strong>
                </div>
                {rollsNeeded !== null ? (
                  <div>
                    <span>Rolls Required</span>
                    <strong>{rollsNeeded}</strong>
                    <em>{Number(rollLengthM).toLocaleString()} m per roll</em>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          <footer className="estimate-dialog__footer">
            <StarBorderButton type="button" variant="secondary" onClick={closeDialog}>
              Close
            </StarBorderButton>
            <StarBorderButton type="submit" variant="primary">
              Calculate
            </StarBorderButton>
            <StarBorderButton href="/contact" variant="primary">
              Request Quote
            </StarBorderButton>
          </footer>
        </form>
      </dialog>
    </>
  );
}
