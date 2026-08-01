type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        {eyebrow ? (
          <span className="body-sm page-header-eyebrow">{eyebrow}</span>
        ) : null}
        <h1 className="display-lg">{title}</h1>
        {description ? (
          <p className="body-md page-header-description">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
