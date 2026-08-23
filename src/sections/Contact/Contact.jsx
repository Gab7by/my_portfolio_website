import { personalInfo } from "../../data/personalInfo";
import { SECTION_IDS } from "../../lib/constants";
import { SectionWrapper } from "../../components/ui/SectionWrapper";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Card } from "../../components/ui/Card";
import { FadeInWhenVisible } from "../../components/motion/FadeInWhenVisible";
import { ContactForm } from "./ContactForm";
import { ContactInfoList } from "./ContactInfoList";

export function Contact() {
  return (
    <SectionWrapper id={SECTION_IDS.CONTACT} muted>
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Have a project in mind or just want to say hi? Reach out below."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <FadeInWhenVisible>
          <ContactInfoList
            email={personalInfo.email}
            phone={personalInfo.phone}
            location={personalInfo.location}
          />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </FadeInWhenVisible>
      </div>
    </SectionWrapper>
  );
}
