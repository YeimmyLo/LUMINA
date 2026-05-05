import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = {
  active?: string;
  grain?: boolean;
  children: React.ReactNode;
};

export function PageShell({ active, grain = false, children }: PageShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-on-surface">
      {grain ? <div className="organic-grain pointer-events-none fixed inset-0 z-50 opacity-[0.03]" /> : null}
      <Header active={active} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
