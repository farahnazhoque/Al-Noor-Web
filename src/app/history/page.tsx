import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import { historyMilestones } from '@/lib/content';

export const metadata: Metadata = {
  title: 'History',
  description: 'The history of Al-Noor Group of Industries from 1964 to today.',
};

export default function HistoryPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Our Journey"
        title="History of Al-Noor Group"
        description="From a trading house in 1964 to one of Bangladesh's largest industrial groups, with more than five decades of growth, diversification, and contribution to the national economy."
      />
      <section className="section">
        <div className="container">
          <div className="timeline-zigzag">
            {historyMilestones.map((item, index) => (
              <div
                className={`timeline-entry ${index % 2 === 0 ? 'timeline-entry-left' : 'timeline-entry-right'}`}
                key={item.year}
              >
                <div className="timeline-entry-content">
                  <div className="timeline-year">{item.year}</div>
                  <p className="body-md timeline-entry-text">{item.text}</p>
                </div>
                <div className="timeline-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
