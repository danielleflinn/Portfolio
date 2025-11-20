import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';
import { PageNav } from '../components/PageNav';

const sections = [
  { id: 'business-goal', label: 'Business Goal' },
  { id: 'problem', label: 'Problem' },
  { id: 'process', label: 'Process' },
  { id: 'design-solution', label: 'Design Solution' },
  { id: 'impact', label: 'Impact' },
  { id: 'conclusion', label: 'Conclusion' },
];

export function BitwardenExtensionRedesignPage() {
  return <div className="w-full min-h-screen">
      <Navbar />
      <main className="w-full bg-white">
        <CaseStudySummary title="Modernizing the Bitwarden Extension" 
        description="Improving user satisfaction and adoption iteratively by increasing usability of Bitwarden autofill and save by delivering the #1 community requested feature." 
        background="The Bitwarden password manager extension had complex interactions and outdated UI creating a reputation that Bitwarden was 'too technical'. This negatively impacted product adoption, retention and overall user satisfaction––ultimately making it difficult to sell Bitwarden." 
        timeline="10 months" role="Senior Product Designer" methods={['UI/UX design', 'Heuristic evaluation', 'Wireframing', 'Prototyping', 'Usability testing', 'Stakeholder management', 'Figma']} impact="Modernized the extension interface, resulting in improved user experience and increased adoption" image="/extension-cover.png" />
        <PageNav sections={sections} />
        
        <CaseStudySection header="Business Goal" subheader="Improve product adoption, retention, and overall user satisfaction by redesigning the browser extension" columns={3} id="business-goal">
            <div className="bg-[#FFF5F0] p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Reduce user friction
              </h3>
              <p className="text-gray-700">
                Redesign for clarity and emphasize key elements
              </p>
            </div>
            <div className="bg-[#FFF5F0] p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Simplify user onboarding
              </h3>
              <p className="text-gray-700">
                Guide users to accelerate product familiarity
              </p>
            </div>
            <div className="bg-[#FFF5F0] p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Enhance competitive position
              </h3>
              <p className="text-gray-700">
               Create a positive, modern, and approachable perception of Bitwarden
              </p>
            </div>
        </CaseStudySection>

        <CaseStudySection header="Problem" subheader="The extension was visually outdated, inconsistent, and complex—causing users to lose trust, struggle with key tasks, and turn to competing products" columns={2} id="problem">
          <div>
            <p className="text-gray-700 mb-4">
              The extension's interface had accumulated years of incremental changes without a holistic UX strategy. A heuristic analysis revealed significant issues:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Outdated visual design</li>
              <li>Poor visual hierarchy</li>
              <li>Inconsistent interactions</li>
              <li>Unclear iconography and overly technical labels</li>
              <li>High friction in core tasks like autofill</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Internal reports, community requests, social sentiment, and usability testing 
              reinforced these findings: many users found the Bitwarden extension dated and 
              unapproachable, especially non-technical users and those unfamiliar with password managers.
            </p>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img src="/extension-legacy-UI.png" alt="Legacy extension interface showing outdated design" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Legacy extension interface showing outdated design and poor hierarchy
              </p>
            </div>
          </div>
          <div className="bg-[#FFD6C2] p-6 rounded-lg md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-gray-800 italic mb-4">
                "Bitwarden <span className="font-semibold">looks dated and inelegant</span> compared to other password managers."
                <br />
                <span className="text-sm text-gray-600 italic"> - Bitwarden community user</span>
              </p>
              <p className="text-gray-800 italic mb-4">
                "I tried convincing my parents to use it…<span className="font-semibold">they just got frustrated and went back to using sticky notes.</span>"
                <br />
                <span className="text-sm text-gray-600 italic"> - Bitwarden community user</span>
              </p>
              <p className="text-gray-800 italic mb-4">
                "Too complex, I’ve seen my wife trying to use it and <span className="font-semibold">she just gets confused </span>as to what she has to fill in."
                <br />
                <span className="text-sm text-gray-600 italic"> - Bitwarden community user</span>
              </p>
              <p className="text-gray-800 italic">
                "It doesn’t feel very professional… <span className="font-semibold">I would have less trust</span> in it if my password manager looked like this."
                <br />
                <span className="text-sm text-gray-600 italic"> - Bitwarden community user</span>
              </p>
            </div>
            <div className="rounded-lg overflow-hidden mb-4 md:col-span-2">
              <img src="/extension-analysis.png" alt="A FigJam board showing a heuristic analysis of the extension interface with sticky note annotations of improvements to the interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                A FigJam board showing the heuristic analysis of the extension interface 
              </p>
            </div>

        </CaseStudySection>

        <CaseStudySection header="Process" subheader="Creating a solution through design system refresh, user testing, and cross-functional collaboration" columns={1} backgroundColor="#FFF0E8" id="process">
          <div>
            <p className="text-gray-700 mb-6 max-w-2xl">
              To meet the project goals, I used user-centered design and research principles to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 mb-4">
              <li className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Create a recognizable experience by aligning the UI with the Bitwarden Brand–matching fonts, colors, and spacing </li>
              <li  className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Elevate core features and make primary actions more prominent in the user interface </li>
              <li className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Improve scannability and navigation by visual grouping related content and updating spacing </li>
              <li className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Streamline user interactions by simplifying complex interactions and consolidating repetitive UI </li>
              <li  className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Make concepts more approachable by clarifying text labels to be human readable and consolidating repetitive language </li>
              <li  className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800"> Increase the accessibility of the interface by improving color contrast, labeling, semantic structures, and interface customization. </li>
            </ul>
          </div>
         
          <p className="text-gray-700 mt-6 max-w-2xl">
            By grounding decisions in research and ensuring alignment across teams, the project delivered a cohesive, brand-aligned extension experience.
          </p>
        </CaseStudySection>
        <CaseStudySection header="Earl UI concepts & iteration" columns={1}>
          <p className="text-gray-700 max-w-2xl mb-4">
            To ensure an updated UI would solve the problems identified, I created early UI concepts to drive stakeholder alignment and to use in usability testing.
          </p>
          <div className="rounded-lg overflow-hidden mb-4 md:col-span-2">
            <img src="/extension-ui-evolution.png" alt="3 views of the Bitwarden extension login screen. The first shows the legacy extension with outdated styles. The second a black and white wireframe with improved hierarchy. The 3rd shows a higher fidelity design." className="w-full h-auto rounded-lg overflow-hidden" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
              3 view of the early UI concepts used to drive stakeholder alignment
            </p>
          </div>
          <div className="rounded-lg overflow-hidden mb-4 md:col-span-2">
            <img src="/extension-ui-evolution2.png" alt="6 views of the Bitwarden extension vault screen. The 4 show medium fidelity design with the final 2 showing higher fidelity concepts used in testing." className="w-full h-auto rounded-lg overflow-hidden" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
              Additional early UI concepts used to align on a concept for user testing
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Updated Design Tokens & Brand Alignment" columns={1} backgroundColor="#FFF0E8">
          <p className="text-gray-700 mb-4">
            The legacy palette and type system lacked hierarchy. New tokens introduced:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>A modernized Bitwarden blue family</li>
            <li>Scalable typography with headline hierarchy</li>
            <li>Increased border radius for friendliness</li>
            <li>Improved spacing for readability</li>
          </ul>
          <p className="text-gray-700 mb-4">
            These updates elevated the extension and strengthened brand consistency across products.
          </p>
          <div className="rounded-lg overflow-hidden mb-4 md:col-span-2">
            <img src="/extension-legacy-tokens.png" alt="Legacy UI components, blue and gray for the main interface components and little hierarchy applied to screens." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
              Legacy UI design tokens and components
            </p>
          </div>
          <div className="rounded-lg overflow-hidden mb-4 md:col-span-2">
            <img src="/extension-new-tokens.png" alt="New Design UI tokens. Showing the main Bitwarden blue with varying shades for supporting colors and and accent teal. When applied to screens the interface hierarchy is increased." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
              New UI design tokens and components
            </p>
          </div>
        </CaseStudySection>

        <CaseStudySection header="Design Solution" subheader="A modern and approachable extension built on updated tokens, unified navigation, clear language, and moments of visual delight" columns={1} id="design-solution">
          <p className="text-gray-700 mb-6 max-w-2xl">
            The redesign, informed by the competitive landscape and usability testing, 
            introduced a significantly more intuitive, polished, and human-centered interface.
            The result was a modern, cohesive, and far easier to navigate interface—meeting both user and business needs.
          </p>
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-gray-800">
              Unified Navigation & Simplified Content Structure
            </h3>
            <p className="text-gray-700 mb-4 max-w-2xl">
              Previously, users bounced between "Tab" and "Vault" pages. The redesign consolidated these into a single, scannable experience with embedded filters, reducing confusion and improving search clarity.
            </p>
            <div className="rounded-lg overflow-hidden mb-4">
              <img src="/extension-compare-vault.png" alt="Legacy extension UI and new design side by side showing more modern UI elements, increased organization, and hierarchy in the new design." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                Comparison of old and new design for the vault screen
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Simplified Language & Clearer Concepts
            </h3>
            <p className="text-gray-700 mb-4">
              Technical labels were replaced with human-readable terminology:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>"URI" → "Website"</li>
              <li>Added help text for concepts like Authenticator keys</li>
              <li>Consolidated redundant language and clarified microcopy</li>
            </ul>
            <div className="rounded-lg overflow-hidden mb-4">
              <img src="/extension-compare-terms.png" alt="Legacy extension UI and new design side by side showing more modern UI elements, increased organization, and hierarchy in the new design." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4 pb-4">
                Comparison of old and new design for the login item screen
              </p>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Visual Delight Through Illustration
            </h3>
            <p className="text-gray-700 mb-4 max-w-2xl">
              Throughout the design, I worked to add illustrations to authentication screens and empty states to bring more delight and interest to the interface.
              These helped new users feel welcomed and reduced the perception that Bitwarden is "too technical."
            </p>
            <div className="rounded-lg overflow-hidden">
              <img src="/extension-delight.png" alt="New extension design showing a welcome screen with a key, person, and card illustration. A login page showing a waving hand to welcome the user back. An empty view of the password manager with an illustration of a vault. And an illustration showing an envelope with an obscured phrase for the request password hint screen." className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
              <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Friendly illustrations used in onboarding screens and empty states
              </p>
            </div>
          </div>
        </CaseStudySection>

        <CaseStudySection header="Impact" subheader="The redesign measurably improved usability, visual appeal, user confidence, and adoption–directly impacting sales goals" columns={3} backgroundColor="#FFF0E8" id="impact">
          <div className="bg-[#FFD6C2] p-6 rounded-lg" >
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Quantitative Improvements from Testing
            </h3>
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-end">
                  <span className="font-semibold text-2xl text-gray-800 mr-2">+23%</span>
                  <span>Visual Appeal</span>
                </li>
                <li className="flex items-end">
                  <span className="font-semibold text-2xl text-gray-800 mr-2">+20%</span>
                  <span>Usability</span>
                </li>
                <li className="flex items-end">
                  <span className="font-semibold text-2xl text-gray-800 mr-2">+10%</span>
                  <span>Overall UX</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-lg text-gray-700 border border-[#FFD6C2]">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Beta Feedback from 200+ Users
            </h3>
            <p className="mb-4"> Median rating for visual appeal, usability and overall experience:</p>
            <p className="text-gray-600 text-xl"><span className="text-gray-800 font-semibold text-5xl">4</span> / 5 </p>
          </div>
          <div className="bg-[#FFD6C2] text-gray-700 p-6 rounded-lg" >
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              Qualitative Beta Feedback
            </h3>
            <p className="mb-4">
              Users highlighted that the extension felt:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>More intuitive</li>
              <li>Modern and polished</li>
              <li>More user-friendly</li>
              <li>More trustworthy</li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Beta Enhancements
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Added Compact Mode for denser layouts</li>
                <li>Added custom width options</li>
                <li>Introduced filter toggles to hide advanced options</li>
                <li>Clarified actions, fixed bugs, and improved launch item visibility</li>
              </ul>
              </div>
              <div className="rounded-lg overflow-hidden mb-6">
                <img src="/extension-compact.png" alt="Beta enhancements for compact mode and a filter toggle" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
                <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                  Beta enhancements for compact mode show reduced spacing by 4px and a filter toggle
                </p>
              </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 grid md:grid-cols-2 gap-8">
            <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic mb-4">
              “Bitwarden's new design is like <span className="font-semibold">a fresh coat of paint on an old safe</span>. Now it's both secure and stylish!”
              <br />
              <span className="text-sm text-gray-600 italic">
                - Bitwarden community user
              </span>
            </p>
            <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic mb-4">
              “The redesign makes the browser extension look <span className="font-semibold">fresh, modern and more beautiful.</span>”
              <br />
              <span className="text-sm text-gray-600 italic">
                - Bitwarden community user
              </span>
            </p>
            <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic mb-4">
            “After walking 4 people through setup...it was much easier. <span className="font-semibold">The modern look helps with first impressions</span> and acceptance. ”
            <br />
              <span className="text-sm text-gray-600 italic">
                - Bitwarden community user
              </span>
            </p>
            <p className="bg-[#FFD6C2] p-6 rounded-lg text-gray-800 italic mb-4">
            “<span className="font-semibold">These are very welcomed changes.</span> I've been waiting for a UI/UX refactoring on both the extension and the windows and android apps.”
            <br />
              <span className="text-sm text-gray-600 italic">
                - Bitwarden community user
              </span>
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Conclusion" subheader="A strategic, research-driven redesign that modernized Bitwarden's extension, improved usability, and set the foundation for a more cohesive product ecosystem." columns={1} id="conclusion">
          <p className="text-gray-700 mb-6 max-w-2xl">
            This project transformed one of Bitwarden's most important user touchpoints. By modernizing the extension's UI, clarifying complex concepts, improving accessibility, and creating a more welcoming experience, the redesign directly supported adoption, retention, and user satisfaction.
          </p>
          <p className="text-gray-700 mb-6 max-w-2xl">
            The success of the redesign validated the need for ongoing UX modernization across the ecosystem and demonstrated how thoughtful, user-centered design can meaningfully improve both product perception and business outcomes.
          </p>
          <div className="rounded-lg overflow-hidden">
            <img src="/extension-conclusion.png" alt="Final redesigned extension interface showing modern, cohesive design" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
              Final redesigned extension interface showing modern, cohesive design
            </p>
          </div>
        </CaseStudySection>
      </main>
      <Footer />
    </div>;
}