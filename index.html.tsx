import { Link } from "react-router-dom";
import { Activity, Bell, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <>
      <section
        className="text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="container py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Environmental Alert System
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95 mb-8">
            A rule-based monitoring system that watches environmental data and
            triggers clear alerts when conditions become unsafe.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/monitor">Open Monitor</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 grid gap-6 md:grid-cols-3">
        {[
          {
            icon: Activity,
            title: "Monitor Conditions",
            text: "Track temperature, humidity and air quality in real time.",
          },
          {
            icon: ShieldCheck,
            title: "Rule-Based Logic",
            text: "Clear thresholds decide what is safe and what is not.",
          },
          {
            icon: Bell,
            title: "Instant Alerts",
            text: "Color-coded warnings make risks easy to spot.",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="bg-card border border-border rounded-xl p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
          >
            <Icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{text}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Index;
