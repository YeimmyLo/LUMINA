type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <span className="label-caps mb-4 block text-secondary">{eyebrow}</span>
      <h2 className="font-display text-h2 text-primary">{title}</h2>
      {description ? <p className="mt-4 text-on-surface-variant">{description}</p> : null}
    </div>
  );
}
