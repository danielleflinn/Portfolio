import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';
export function BitwardenAutofillExperiencePage() {
  return <div className="w-full min-h-screen bg-[#FFFAF5]">
      <Navbar />
      <main className="w-full">
        <CaseStudySummary title="Elevating the Bitwarden Autofill Experience" description="Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden save and fill through delivering the #1 community requested feature." background="The Bitwarden password manager extension had several ways for users to save and fill their logins, but they were not discoverable or intuitive to users. This poor experience led many users to abandon the product in favor of competitors." timeline="6 months" role="Lead Product Designer" methods={['UI/UX Design', 'Iterative delivery', 'Competitive analysis', 'Usability Testing', 'Stakeholder management']} impact="Delivered the most requested feature, significantly improving user satisfaction and adoption rates" image="/inline-menu-cover.png" />
        <div className="w-full bg-white pt-16 pb-1 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <CaseStudySection header="Business Goals" columns={3}>
              <div className="bg-[#FFF5F0] p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Increase user adoption
                </h4>
                <p className="text-gray-700">
                  Accelerate when users experience autofill
                </p>
              </div>
              <div className="bg-[#FFF5F0] p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Reduce user friction
                </h4>
                <p className="text-gray-700">
                  Improve discoverability and usability of save and autofill
                </p>
              </div>
              <div className="bg-[#FFF5F0] p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">
                  Enhance competitive position
                </h4>
                <p className="text-gray-700">
                  Improve approachability of autofill so it is on par or better
                  than competition
                </p>
              </div>
            </CaseStudySection>
            <CaseStudySection header="The Problem" columns={2}>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Autofill with Bitwarden
                </h3>
                <p className="mb-4">
                  Before this initiative users could autofill 4 different ways:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Opening the extension and autofill from "Tab"</li>
                  <li>Using a right click browser context menu</li>
                  <li>Turning on the "autofill on page load" setting</li>
                  <li>Using a keyboard shortcut</li>
                </ul>
                <p className="mb-4">
                  These existing autofill methods were not surfaced in the app's
                  core UI leaving users to struggle with moving across the
                  screen to open the extension every-time they needed to
                  autofill.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="extension-autofill/1-legacy-autofill.png" alt="Current autofill methods in Bitwarden" className="w-full h-auto" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Save to Bitwarden
                </h3>
                <p className="mb-4">
                  When it came to saving passwords to Bitwarden, there were 2
                  workflows users were using; but both had usability issues.
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-4">
                  <li>
                    Fill and submit a form, then select "save" on a Bitwarden
                    prompt similar to the prompt of a built in browser. However
                    this solution was not reliable and would often not appear
                    when user's expected it.
                  </li>
                  <li>
                    This led many users to moving toward a work around solution
                    with many more steps. The users would manually create the
                    item in Bitwarden, and then autofill the information into
                    create account forms.{' '}
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/4-manual-create.png" alt="Demonstration of users manually creating a login in the extension" className="w-full h-auto" />
              </div>
            </CaseStudySection>
            <CaseStudySection header="User Feedback" columns={1}>
              <p className="text-gray-700 max-width-5xl">
                Users often compared the Bitwarden way to save and fill items to
                competition, citing the simple "autofill menu" in competitors
                was the only thing they were missing with Bitwarden. Some even
                switched to competitors due to this missing experience.
              </p>
            </CaseStudySection>
          </div>
        </div>
        <section className="w-full pt-8 pb-16 px-6 md:px-12 bg-[#FFF0E8]">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-800 italic">
                  "This is a must-have feature…it will help autofill easily and
                  accurately."
                </p>
              </div>
              <div>
                <p className="text-gray-800 italic">
                  "I have a very long distance for the eyes and mouse between
                  the login field and the Bitwarden Toolbar button. Having the
                  controls inside the fields would increase the usability a
                  lot!"
                </p>
              </div>
              <div>
                <p className="text-gray-800 italic">
                  "This request has been proposed for almost 1 year now and
                  still waiting… I gave up and switched to a different Password
                  Manager...Hope Bitwarden gets around to it at some point."
                </p>
              </div>
              <div>
                <p className="text-gray-800 italic">
                  "As a recent convert from LastPass and Roboform to Bitwarden,
                  this is by far the number 1 thing I miss - maybe the only
                  thing I miss"
                </p>
              </div>
              <div>
                <p className="text-gray-800 italic">
                  "For less tech-savvy family members, this feature would be
                  extremely helpful. I'm not even sure if I can get them to
                  switch without this feature, as they have come to expect it
                  from LastPass."
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full bg-white py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <CaseStudySection header="Competitive Analysis" columns={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Autofill
                  </h3>
                  <p className="mb-4">
                    All major competitors offered an in page autofill experience
                    similar to the built in browser's by:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Showing an icon in field</li>
                    <li>Showing matching items within a menu</li>
                    <li>
                      Allowing users to select the item without leaving their
                      learned workflow
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="/6-competitor-autofill.png" alt="Screenshot of 4 competitors autofill menus" className="w-full h-auto" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Saving Passwords
                  </h3>
                  <p className="mb-4">
                    All major competitors offered multiple ways to save a new
                    password:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>From their in page menu before submission</li>
                    <li>A popup prompt after form submission</li>
                  </ul>
                  <p>
                    This allowed users 2 opportunities to save their
                    passwords–increasing the likelihood that they would complete
                    the vital task.
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img src="/7-competitor-save.png" alt="Screenshot of 4 competitors save prompts" className="w-full h-auto" />
                </div>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Identifying User Journeys" columns={2}>
              <div>
                <p className="mb-4">
                  From the competitive analysis and user feedback, I ideated all
                  possible user journeys I expected users would want to see in
                  this feature.
                </p>
                <p className="mb-4">
                  From the brainstormed list, I prioritized each feature based
                  on the value it would deliver to the user.
                </p>
                <p className="mb-4">
                  This resulted in the following primary user journeys:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Logging in to a website</li>
                  <li>Creating a new account on a website</li>
                  <li>Saving a new password to Bitwarden</li>
                  <li>Updating an existing password in Bitwarden</li>
                  <li>Filling out payment or billing forms</li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/8-journey.png" alt="User flow diagram for autofill states" className="w-full h-auto" />
              </div>
            </CaseStudySection>
            <CaseStudySection header="Prioritizing User Journeys" columns={2}>
              <div>
                <p className="mb-4">
                  The initiative's Product Manager and I aligned on focusing the
                  MVP work on the core need:{' '}
                  <strong>
                    autofilling credentials when signing into a website
                  </strong>
                </p>
                <p className="mb-4">
                  I then identified the UI states I would need to design for and
                  mapped these to a userflow:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Account unlocked (happy path)</li>
                  <li>Account locked</li>
                  <li>Nothing saved for website</li>
                </ul>
                <p className="mb-4">
                  I identified 2 opportunities to improve the MVP further if
                  development capacity allowed:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Prompt to save a new account in Bitwarden when nothing is
                    saved
                  </li>
                  <li>
                    Option to quickly launch an item's details of matching items
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/9-userflow-diagram.png" alt="User flow diagram for autofill states" className="w-full h-auto" />
              </div>
            </CaseStudySection>
            <CaseStudySection header="UI Iteration" columns={2}>
              <div>
                <p>
                  The first set of UI iterations focused on trying to create a
                  framework that could scale to support the additional features
                  identified in discovery. Ultimately, I realized these ideas
                  muddled the UI and I needed to define a simpler experience to
                  support that core user journey I'd identified.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/10-ui-iteration.png" alt="UI iteration explorations" className="w-full h-auto" />
              </div>
            </CaseStudySection>
            <CaseStudySection header="Final Direction" columns={1}>
              <p className="mb-4">
                The final design direction took a simpler approach to focus on
                delivering the key action for autofilling log in forms as
                clearly as possible
              </p>
              <p className="mb-6">
                While still allowing for additional functionality to be built
                upon it in followup releases.
              </p>
              <div className="rounded-lg overflow-hidden shadow-md mb-8">
                <img src="/11-final-password-fill.png" alt="Initial MVP autofill menu design showing the 3 UI states" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Initial MVP autofill menu design showing the 3 UI's needed:
                  account locked, matching logins, and no matching logins
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/11-final-password-fill2.png" alt="Final MVP released to users" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  The final MVP released to users showing a "view details" quick
                  link icon button and a prompt to create a new item in
                  Bitwarden when there are no matching logins
                </p>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Expanding Autofill" columns={1}>
              <p className="mb-4">
                While the development team built out the experience for the
                login flows I continued designing for the V2 user journeys:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>
                  Filling out contact information in registration or billing
                  forms
                </li>
                <li>Filling out payment information in billing forms</li>
                <li>
                  Creating strong unique passwords to autofill registration
                  forms
                </li>
              </ul>
              <div className="rounded-lg overflow-hidden shadow-md mb-8">
                <img src="/12-final-cards-ids.png" alt="V2 designs for autofilling identities and payment methods" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  V2 designs for autofilling identities (contact information)
                  and payment methods
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mb-8">
                <img src="/12-final-generate.png" alt="Userflow for creating a new account" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Userflow for creating a new account on a website using the new
                  V2 inline autofill of contact information and password
                  generation
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/13-final-generate-change.png" alt="Userflow for updating passwords" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Userflow for updating passwords using the new V2 inline
                  password generator
                </p>
              </div>
            </CaseStudySection>
            <CaseStudySection header="User Testing" columns={2}>
              <div>
                <p className="mb-6">
                  I conducted user testing with an early development proof of
                  concept, while the engineering team wrapped up a security
                  review and final bug fixes. Testing with the actual product
                  allowed me to get accurate insights from the experience to
                  help drive further improvements.
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Research Goal
                </h3>
                <p className="mb-6">
                  Establish baseline metrics for how usable the autofill
                  experience is and gather insights to drive additional
                  iterations.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img src="/extension-autofill/14-user-test.png" alt="Screenshot of a user testing session" className="w-full h-auto" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Screenshot of a user testing session right before they
                  discover the autofill menu
                </p>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Testing Tasks & Results" columns={1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    User Testing Tasks:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Turn on the feature</li>
                    <li>Create a new account & save</li>
                    <li>Sign in/autofill a new account</li>
                    <li>Save an existing account's credentials</li>
                    <li>Identify correct email from 2 matching logins</li>
                    <li>Autofill with account locked</li>
                  </ul>
                </div>
                <div className="bg-[#E8F5E9] p-6 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    System Usability Score: 88
                  </p>
                  <p className="text-gray-700">
                    Higher than the industry average of 68
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Insights to improve autofill menu:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Users reported turning on the feature was cumbersome and
                    expected it to be on by default. Providing me with data to
                    support my request to release the feature on by default for
                    new users.
                  </li>
                  <li>
                    The obfuscated email, (requested by security team) caused
                    friction when multiple items matched a website. Providing me
                    with data to educate the company on the impacts of the
                    security precaution.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  Insights to improve save prompt:
                </h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Users often missed the prompt</li>
                  <li>
                    Users reported the options presented in the prompt were
                    confusing
                  </li>
                  <li>
                    User saving with the prompt were unsure if the password was
                    actually saved
                  </li>
                </ul>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Applying Results" columns={1}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                MVP Save to Bitwarden Prompt
              </h3>
              <p className="mb-4">
                Insights from user testing helped drive additional improvements,
                including a redesign of the save and update prompts. Based on
                the testing results I knew I needed to: increase the
                reliability, visibility, and clarity of the prompt and improve
                user's confidence in it.
              </p>
              <p className="mb-4">
                To keep the scope low and deliver value quickly, I focused on
                making small changes to improve the experience, resulting in:
              </p>
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>
                  Increased visibility of the prompt by updating the placement
                  of the prompt into a more intuitive location–the top right to
                  match competitors and built in browser notifications.
                </li>
                <li>
                  Improve user confidence in the product by adding confirmation
                  messaging after a successful save
                </li>
                <li>
                  Increase the reliability of the prompt through technical
                  improvements to when it is triggered
                </li>
              </ul>
              <div className="rounded-lg overflow-hidden shadow-md mb-12">
                <img src="/15-legacy-save-prompt.png" alt="MVP save prompt improvements" className="w-full h-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Redesigned Save to Bitwarden Prompt
              </h3>
              <p className="mb-4">
                While the MVP update resolve much of the user friction
                identified, it did not resolve the unclarity of the options
                presented in the UI. For resolving this issue, a UI update was
                prioritized.
              </p>
              <p className="mb-6">
                This full redesign updated the visual look and feel to highlight
                primary actions better, and matched more modern design
                principles now in use throughout the extension's pages.
              </p>
              <p className="mb-6">
                The redesign also created a more scalable experience that
                Bitwarden planned to use for additional enterprise features.
              </p>
              <div className="rounded-lg overflow-hidden shadow-md mb-8">
                <img src="/16-final-save-prompt.png" alt="Redesigned save prompt" className="w-full h-auto" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md bg-[#FFFAF5] p-6">
                <p className="text-sm text-gray-600 mb-3">
                  Bringing all the improvements together, the full user journey
                  for creating and saving a new account to Bitwarden:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
                  <li>
                    Using the autofill contact information to fill the email
                    field
                  </li>
                  <li>
                    Using the password generation feature to fill a strong
                    password
                  </li>
                  <li>
                    Using either of the "save to Bitwarden" prompts to save to
                    Bitwarden
                  </li>
                  <li>
                    Displaying the confirmation UI to improve user confidence
                    and delight
                  </li>
                </ul>
                <video width="full" height="240" controls className="rounded-md">
                  <source src="/extension-autofill/autofill-notification-demo.mp4" type="video/mp4"></source>
                </video>
              </div>
            </CaseStudySection>
            <CaseStudySection header="Impact" columns={1}>
              <div className="bg-gradient-to-br from-[#FFF5F0] to-[#FFE8D9] p-8 rounded-lg">
                <img src="/17-final-user-quotes.png" alt="5 user quotes from the feature release" className="w-full h-auto rounded mb-4" />
                <p className="text-lg text-gray-800 leading-relaxed">
                  This initiative greatly improved autofill discoverability,
                  usability, and user satisfaction. Users responded
                  overwhelmingly positive to the initial launch of the autofill
                  menu and the followup work.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed mt-4">
                  Demonstrating how investing in user experience leads to sales
                  expansion and improved retention, as improvements made during
                  the project empowered the sales team land a large enterprise
                  deal.
                </p>
              </div>
            </CaseStudySection>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}