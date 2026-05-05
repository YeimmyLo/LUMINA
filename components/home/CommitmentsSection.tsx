import { Icon } from "@/components/Icon";
import { SectionHeading } from "@/components/SectionHeading";
import { CommitmentSvgIcon } from "@/components/icons/LandingSvgIcon";
import { commitments } from "@/data/home";

export function CommitmentsSection() {
  return (
    <section className="relative overflow-hidden bg-surface-bright py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <SectionHeading
          eyebrow="Compromiso"
          title="Comprometidos con el planeta"
          className="mb-16"
        />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {commitments.map((commitment) => (
            <article key={commitment.title} className="group text-center">
              <CommitmentSvgIcon name={commitment.icon} />
              <h3 className="mb-3 font-display text-lg text-primary">
                {commitment.title}
              </h3>
              <p className="text-sm leading-6 text-on-surface-variant">
                {commitment.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
