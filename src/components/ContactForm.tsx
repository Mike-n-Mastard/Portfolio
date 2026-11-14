import { Button } from "@/components/ui/button";

const contactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL;

export default function ContactForm() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h3 className="font-heading text-2xl font-black tracking-tight">Send a message</h3>
        <p className="mt-3 text-muted-foreground">
          Interested in collaborating? Use the email link to get in touch.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        {contactEmail ? (
          <>
            <p className="text-sm text-muted-foreground">Email me directly:</p>
            <Button asChild className="mt-4">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </Button>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            Contact details will be added soon.
          </p>
        )}
      </div>
    </div>
  );
}
