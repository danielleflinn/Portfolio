import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';
import { PageNav } from '../components/PageNav';
import { Heading3 } from 'lucide-react';

const sections = [
  { id: 'business-goal', label: 'Business Goal' },
  { id: 'problem', label: 'Problem' },
  { id: 'process', label: 'Process' },
  { id: 'solution', label: 'Design Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'conclusion', label: 'Conclusion' },
];

export function BitwardenAutofillExperiencePage() {
  return <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full bg-white">
        <CaseStudySummary title="Elevating the Bitwarden Autofill Experience" description="Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill through delivering the #1 community requested feature." background="The Bitwarden password manager extension had several ways for users to save and fill their logins, but they were not discoverable or intuitive to users. This poor experience led many users to abandon the product in favor of competitors." timeline="6 months" role="Lead Product Designer" methods={['UI/UX Design', 'Iterative delivery', 'Competitive analysis', 'Usability Testing', 'Stakeholder management']} impact="Delivered the most requested feature, significantly improving user satisfaction and adoption rates" image="/inline-menu-cover.png" />
        <PageNav sections={sections} />
          <CaseStudySection header="Business Goal" subheader="Improve user satisfaction and adoption by increasing usability of Bitwarden save and fill" columns={3} id="business-goal">
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Increase user adoption
            </h3>
            <p className="text-gray-700">
              Accelerate when users experience autofill
            </p>
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Reduce user friction
            </h3>
            <p className="text-gray-700">
              Improve discoverability and usability of save and autofill
            </p>
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Enhance competitive position
            </h3>
            <p className="text-gray-700">
                Improve approachability of autofill so it is on par or better
                than competition
            </p>
          </div>
          </CaseStudySection>
          <CaseStudySection header="Problem" subheader="Autofill and save methods were unreliable and created friction, causing users to turn to competitors instead of Bitwarden" columns={2} id="problem">
          <div className="grid gap-6">
            <div className="max-w-2xl">
              <p className="font-medium text-3xl text-gray-600 mb-2"> 1 </p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Fragmented Autofill Experience
              </h3>
              <p className="text-gray-700">
              Existing autofill methods were not surfaced in the app's core UI or within the page,
              forcing users to move between form fields and the browser toolbar, slowing them 
              down and making the experience feel outdated.
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="font-medium text-3xl text-gray-600 mb-2"> 2 </p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Unreliable Password-Saving Flows
              </h3>
              <p className="text-gray-700">
              Bitwarden’s save prompt often failed to appear, leading users to 
              manually create login items before filling out registration forms. 
              This workaround increased effort, reduced trust, and caused 
              frustration during one of the most essential tasks in the product.
              </p>
            </div>
            <div className="max-w-2xl">
              <p className="font-medium text-3xl text-gray-600 mb-2"> 3 </p>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
              User Signals & Competitive Gaps
              </h3>
              <p className="text-gray-700">
              Users consistently reported frustration with Bitwarden’s missing 
              in-page menu and frequently cited competitors like LastPass and 
              1Password as having a superior autofill workflow. Many said the 
              lack of this feature was enough to prevent adoption—or push them 
              to switch tools entirely.
              </p>
            </div>
          </div>
          <div>
              <img src="/1-legacy-autofill.png" alt="Legacy UI showing utofill options in the extension before the MVP" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Legacy UI showing utofill options in the extension before the MVP
              </p>
          </div>
          </CaseStudySection>
          <section className="w-full pt-16 pb-16 px-6 md:px-12 bg-[#FFF0E8]">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                    "This is a must-have feature…it will help autofill easily and
                    accurately."
                    <br />
                    <span className="text-sm text-gray-600 italic">
                      - Bitwarden community user
                    </span>
                  </p>
                </div>
                <div>
                  <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                    "I have a very long distance for the eyes and mouse between
                    the login field and the Bitwarden Toolbar button. Having the
                    controls inside the fields would increase the usability a
                    lot!"
                    <br />
                    <span className="text-sm text-gray-600 italic">
                      - Bitwarden community user
                    </span>
            </p>
          </div>
                <div>
                  <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                    "This request has been proposed for almost 1 year now and
                    still waiting… I gave up and switched to a different Password
                    Manager...Hope Bitwarden gets around to it at some point."
                    <br />
                    <span className="text-sm text-gray-600 italic">
                      - Bitwarden community user
                    </span>
            </p>
          </div>
                <div>
                  <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                    "As a recent convert from LastPass and Roboform to Bitwarden,
                    this is by far the number 1 thing I miss - maybe the only
                    thing I miss"
                    <br />
                    <span className="text-sm text-gray-600 italic">
                      - Bitwarden community user
                    </span>
                 </p>
          </div>
                <div>
                  <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                    "For less tech-savvy family members, this feature would be
                    extremely helpful. I'm not even sure if I can get them to
                    switch without this feature, as they have come to expect it
                    from LastPass."
                    <br />
                    <span className="text-sm text-gray-600 italic">
                      - Bitwarden community user
                    </span>
                  </p>
          </div>
        </div>
          </div>
          </section>
          <section className="flex flex-col gap-8 items-center justify-center mb-16 w-full pt-16 pb-16 px-6 md:px-12  md:flex-row">
            <div>
              <img src="/6-competitor-autofill.png" alt="Screenshot of 4 competing autofill menus" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Screenshot showing autofill menus from 4 competing products
              </p>
          </div>
            <div>
              <img src="/7-competitor-save.png" alt="Screenshot of 4 competitors save prompts" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Screenshot of save prompts from 4 competing products
            </p>
          </div>
          </section>     
          <CaseStudySection header="Process" subheader="Driving a solution through research, journey maps, UI iteration, and testing" columns={1} backgroundColor="#FFFAF5" id="process">
              <div>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                     Identifying Key User Journeys
                    </h3>
                    <p className="text-gray-700">
                    From competitive analysis and user feedback, I mapped 
                    the end-to-end flows users expected. This diagram aligned 
                    engineering, product management, and security teams on the 
                    project direction and the holistic experience.
            </p>
          </div>
                  <div>
                    <img src="/9-userflow-diagram.png" alt="User flow diagram for autofill logins and creating a new account" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                    User flow diagram for autofill logins and creating a new account
            </p>
          </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    UI Iteration & Scalability
                    </h3>
                    <p className="text-gray-700">
                    Multiple early UI concepts explored how the in-page menu could scale 
                    to additional data types. Iterations focused on minimizing visual noise, 
                    establishing a clear icon language, and supporting future expansion 
                    without compromising the MVP’s simplicity. 
            </p>
          </div>
                  <div className="max-w-5xl mt-8">
                    <img src="/10-ui-iteration.png" alt="UI iteration explorations" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                    <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                        UI iteration explorations
            </p>
          </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="text-gray-700">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    User Testing With a Working Build
          </h3>
                    <p className="mb-4">
                    Testing with a live development build enabled realistic task execution
                    across six scenarios: 
                    </p>
                     <ul className="list-disc pl-6 space-y-2 mb-4">
                      <li> Enabling the feature </li>
                      <li> Creating accounts </li>
                      <li> Saving credentials </li>
                      <li> Handling multiple logins </li>
                      <li> Interacting with a locked vault </li>
                    </ul>
                  </div>
                  <div>
                    <img src="/14-user-test.png" alt="Screenshot of a user testing session" className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-2xl" />
                    <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                      Screenshot of a user testing session right before they
                      discover the autofill menu
            </p>
          </div>
                </div>
                <div className="bg-[#DBF0DD] p-6 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  System Usability Score: 88
          </h3>
            <p className="text-gray-700">
              Higher than the industry average of 68
            </p>
          </div>
              </div>
            </CaseStudySection>
            
            <CaseStudySection header="Design Solution" subheader="A scalable in-page autofill menu and redesigned save experience created a modern, intuitive, and trustworthy workflow across login, registration, and data entry tasks" columns={1} id="solution">
              <div className="text-gray-700">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                MVP: Inline Autofill for Logins
          </h3>
                <p className="mb-4 max-w-2xl">
                The MVP introduced a clean in-page autofill menu placed directly within 
                login fields—minimizing cursor travel and matching common mental models 
                established by browsers and competitors.
          </p>
          <p className="mb-4">
                  Key elements included in the MVP:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-8 max-w-2xl">
                  <li> Three UI states (vault locked, matching items, no matches) </li>
                  <li> A quick-view details button </li>
                  <li> A prompt to create a new item when none exist </li>
                </ul>
                <div className="mb-8">
                  <img src="/11-final-password-fill.png" alt="Initial MVP autofill menu design showing the 3 UI states" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                    The MVP autofill menu design showing the 3 UI's needed:
                    account locked, matching logins, and no matching logins
                  </p>
                </div>
                <div>
                  <img src="/11-final-password-fill2.png" alt="Final MVP released to users" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                    The MVP autofill menu design showing the "view details" quick
                    link and a prompt to create a new item if there were no mathcing logins
                  </p>
                </div>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Expanding Autofill" columns={1} backgroundColor="#FFF0E8" id="expanding-autofill">
              <p className="mb-4 max-w-2xl">
                While engineering built the MVP, I designed V2 workflows that used the same in-page framework for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 max-w-2xl">
                <li>Autofilling contact information (name, email, phone, address)</li>
                <li>Autofilling payment cards</li>
                <li>Inline password generation during account creation</li>
          </ul>
              <p className="mb-4 max-w-2xl mb-8">
                This unified all major personal data interactions under a single, predictable UX pattern.              </p>
              <div className="mb-8">
                <img src="/12-final-cards-ids.png" alt="Designs for autofilling contact information and payment methods" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                  Designs for autofilling contact information and payment methods
                </p>
              </div>
              <div className="mb-8">
                <img src="/12-final-generate.png" alt="Userflow for creating a new account" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                  Designs for creating a new account on a website using the
                  V2 inline autofill for contact information and password
                  generation
                </p>
          </div>
            </CaseStudySection>
            <CaseStudySection header="Improving Save and Update Prompts" columns={1}>
              <div className="flex flex-col md:flex-row gap-8 mb-8 text-gray-700">
                <div>
                  <p className="mb-4 max-w-2xl">
                    Testing revealed low visibility and unclear choices in the existing 
                    save to Bitwarden prompt. The MVP adjustments focused on fast impact improvements:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2 max-w-2xl">
                    <li>Moving the prompt to a more intuitive upper-right location</li>
                    <li>Adding confirmation messaging</li>
                    <li>Improving technical reliability</li>
                  </ul>
                  <p className="mb-4 max-w-2xl">  
                    A full visual redesign followed, clarifying primary actions, 
                    modernizing the UI, and creating a scalable foundation for 
                    future enterprise features.
                  </p>
                </div>
                <div>
                  <img src="/15-legacy-save-prompt.png" alt="MVP save prompt improvements" className="w-full h-auto rounded-lg overflow-hidden shadow-md max-w-2xl" />
                  <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                    MVP save prompt improvements
                  </p>
                </div>
              </div>
              <div className="mb-8">
                <img src="/16-final-save-prompt.png" alt="Redesigned save prompt" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Redesigned save prompt showing the new primary actions and confirmation messaging
                </p>
          </div>
           </CaseStudySection>
          <CaseStudySection header="Impact" subheader="The redesigned workflows significantly improved discoverability, usability, and satisfaction—directly supporting retention and contributing to enterprise sales wins" columns={2} backgroundColor="#FFF0E8" id="impact">
            <div>
              <p className="text-gray-700 mb-3">
                The updated journey now allowed users to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li> Autofill contact information </li>
                <li> Generate and autofill strong passwords inline</li>
                <li> Save via pre- or post-submit prompts</li>
                <li> Receive confirmations that built user trust and confidence </li>
              </ul>
              <p className="text-gray-700 mb-3">
              Users responded overwhelmingly positively to the launch, highlighting the ease and clarity of the new inline menu.
              </p>
            </div>
            <video width="full" height="240" controls className="rounded-md">
              <source src="/autofill-notification-demo.mp4" type="video/mp4"></source>
            </video>
            <div className="text-gray-700 grid grid-cols-1 md:col-span-2 md:grid-cols-3 gap-8"> 
              <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                “It’s incredibly efficient and makes logging in a breeze. 
                <span className="font-semibold"> I love how intuitive and seamless it is, </span> fitting perfectly into 
                Bitwarden’s robust security framework.”
                <br />
                <span className="text-sm text-gray-600 italic">
                  - Bitwarden community user
                </span>
              </p>
              <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
                “<span className="font-semibold">This is absolutely FANTASTIC!</span> It was the only thing I was truly
                 missing from when I ditched Lastpass years ago! I love it!”
                <br />
                <span className="text-sm text-gray-600 italic">
                  - Bitwarden community user
                </span>
              </p>
              <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic">
              “I’m glad this feature is here, 
              <span className="font-semibold"> I can now start recommending Bitwarden to others. </span> 
              So thanks a lot!”
                <br />
                <span className="text-sm text-gray-600 italic">
                  - Bitwarden community user
                </span>
              </p>
            </div>
          </CaseStudySection>
          <CaseStudySection header="Conclusion" subheader="By modernizing autofill and save workflows, the project strengthened Bitwarden’s user experience, competitive position, and business outcomes" columns={1} id="conclusion">
            <p className="text-gray-800 leading-relaxed mb-4 max-w-2xl">
              This initiative addressed long-standing usability challenges across 
              key workflows—autofilling credentials, saving new passwords, generating 
              strong passwords, and completing forms.
            </p>
            <p className="text-gray-800 leading-relaxed mb-4 max-w-2xl">
              By combining competitive analysis, 
              user feedback, UI iteration, and testing with a working build, the final 
              solution significantly improved user trust, speed, and clarity.
            </p>
            <p className="text-gray-800 leading-relaxed mt-4 max-w-2xl">
              The outcome demonstrated the impact of systems thinking and UX strategy on both 
              user satisfaction and revenue, reinforcing Bitwarden’s position in a competitive 
              password-management market.
            </p>
          </CaseStudySection>
      </main>
      <Footer />
    </div>;
}