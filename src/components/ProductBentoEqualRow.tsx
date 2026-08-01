'use client';

import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

export type BentoEqualPanel = {
  id: string;
  className: string;
  label: string;
  title: string;
  body: ReactNode;
  footer?: ReactNode;
};

type ProductBentoEqualRowProps = {
  panels: BentoEqualPanel[];
};

type PanelMetrics = {
  collapsedHeight: number;
  overflowIds: Set<string>;
};

const MIN_BODY_HEIGHT = 80;

function measureRow(panels: BentoEqualPanel[], refs: Record<string, HTMLDivElement | null>): PanelMetrics | null {
  const heights = panels
    .map((panel) => {
      const node = refs[panel.id];
      if (!node) {
        return null;
      }

      return { id: panel.id, height: node.scrollHeight };
    })
    .filter((entry): entry is { id: string; height: number } => entry !== null && entry.height >= MIN_BODY_HEIGHT);

  if (heights.length !== panels.length) {
    return null;
  }

  const nextOverflow = new Set<string>();
  let collapsedHeight = 0;

  heights.forEach(({ id, height }) => {
    const otherHeights = heights.filter((entry) => entry.id !== id).map((entry) => entry.height);
    const tallestOther = otherHeights.length > 0 ? Math.max(...otherHeights) : height;

    if (height > tallestOther + 8) {
      nextOverflow.add(id);
      collapsedHeight = Math.max(collapsedHeight, tallestOther);
    } else {
      collapsedHeight = Math.max(collapsedHeight, height);
    }
  });

  if (collapsedHeight < MIN_BODY_HEIGHT) {
    return null;
  }

  return { collapsedHeight, overflowIds: nextOverflow };
}

export default function ProductBentoEqualRow({ panels }: ProductBentoEqualRowProps) {
  const bodyRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const fullHeights = useRef<Record<string, number>>({});
  const [metrics, setMetrics] = useState<PanelMetrics | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [isStacked, setIsStacked] = useState(false);

  useLayoutEffect(() => {
    const runMeasure = () => {
      const stacked = window.matchMedia('(max-width: 1024px)').matches;
      setIsStacked(stacked);

      if (stacked) {
        setMetrics(null);
        return;
      }

      const next = measureRow(panels, bodyRefs.current);
      if (!next) {
        return;
      }

      panels.forEach((panel) => {
        const node = bodyRefs.current[panel.id];
        if (node) {
          fullHeights.current[panel.id] = node.scrollHeight;
        }
      });

      setMetrics(next);
    };

    runMeasure();
    const frame = window.requestAnimationFrame(runMeasure);

    const media = window.matchMedia('(max-width: 1024px)');
    media.addEventListener('change', runMeasure);
    window.addEventListener('resize', runMeasure);

    return () => {
      window.cancelAnimationFrame(frame);
      media.removeEventListener('change', runMeasure);
      window.removeEventListener('resize', runMeasure);
    };
  }, [panels]);

  const toggleExpanded = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        const node = bodyRefs.current[id];
        if (node) {
          fullHeights.current[id] = node.scrollHeight;
        }
        next.add(id);
      }
      return next;
    });
  };

  const rowExpandedHeight =
    expandedIds.size > 0
      ? Math.max(
          metrics?.collapsedHeight ?? 0,
          ...Array.from(expandedIds).map((id) => fullHeights.current[id] ?? 0),
        )
      : null;

  return (
    <>
      {panels.map((panel) => {
        const isExpanded = expandedIds.has(panel.id);
        const canExpand = !isStacked && (metrics?.overflowIds.has(panel.id) ?? false);
        const clampHeight = metrics?.collapsedHeight ?? null;
        const shouldClamp = canExpand && !isExpanded && clampHeight !== null;
        const bodyMinHeight = !isStacked && rowExpandedHeight !== null ? rowExpandedHeight : undefined;

        return (
          <div
            key={panel.id}
            className={`product-bento__panel product-bento__panel--equal ${panel.className}${isExpanded ? ' is-expanded' : ''}`}
          >
            <div className="product-bento__panel-head">
              <span className="product-bento__panel-label">{panel.label}</span>
              <h2 className="title-md">{panel.title}</h2>
            </div>

            <div
              className="product-bento__panel-body-wrap"
              style={bodyMinHeight !== undefined ? { minHeight: bodyMinHeight } : undefined}
            >
              <div
                ref={(node) => {
                  bodyRefs.current[panel.id] = node;
                }}
                className={`product-bento__panel-body${shouldClamp ? ' is-clamped' : ''}`}
                style={shouldClamp ? { maxHeight: clampHeight } : undefined}
              >
                {panel.body}
              </div>
            </div>

            {canExpand || panel.footer ? (
              <div className="product-bento__panel-footer">
                {canExpand ? (
                  <button
                    type="button"
                    className="product-bento__expand-btn"
                    onClick={() => toggleExpanded(panel.id)}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                ) : null}
                {panel.footer}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}
