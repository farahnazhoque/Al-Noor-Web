'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 1964, label: 'Group Founded' },
  { value: 1250, suffix: '+', label: 'Professional & Technical Staff' },
  { value: 2010, label: 'Paper & Board Mills Established' },
  { value: 10, suffix: '+', label: 'Sister Concerns Nationwide' },
];

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  active: boolean;
};

function CountUp({ value, suffix = '', duration = 2000, active }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let startTime: number | null = null;
    let frame = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, value, duration]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container">
      <div className="stats-grid" ref={sectionRef}>
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <CountUp value={stat.value} suffix={stat.suffix} active={active} />
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
