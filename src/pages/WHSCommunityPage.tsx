import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CaseStudySummary } from '../components/CaseStudySummary';
import { CaseStudySection } from '../components/CaseStudySection';
import { PageNav } from '../components/PageNav';
import { PageStepper } from '../components/PageStepper';
import { UserCircle, Users, Award, Rss, Share2 } from 'lucide-react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'business-goal', label: 'Business Goal' },
  { id: 'understanding-problem', label: 'Problem' },
  { id: 'process', label: 'Process' },
  { id: 'design-solution', label: 'Design Solution' },
  { id: 'impact', label: 'Impact' },
];

export function WHSCommunityPage() {
  return <div className="w-full min-h-screen bg-white">
      <Navbar />
      <PageNav sections={sections} />
      <main className="w-full" style={{ paddingTop: '60px' }}>
        <CaseStudySummary title="Creating a social wellbeing solution" 
        description="Improving user engagement and competitive positioning by launching a 0 to 1 social wellness product that expanded business offerings." 
        background="WebMD Health Services had a digital wellbeing product that focused on using gamification and a reward system to drive behavior change. While the product had many strengths when mapped to the Octalysis Gamification motivators, it lacked a social influence and relatedness motivator that many competitors had, leading to lost sales deals." 
        timeline="6 months" role="Product Designer" methods={['UI/UX Design', 'Discovery research', 'User surveys', 'User interviews', 'Gamification map', 'Wireframing', 'Usability testing', 'Sketch']} impact="Launched a 0 to 1 social wellness product that expanded business offerings and increased sales deals." image="/community-cover.png" />
        <CaseStudySection header="Business Goal" subheader="Expand competitive positioning and sales offerings through enhancing social well-being features" columns={3} id="business-goal">
        <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Increase Platform Engagement
            </h3>
              <p className="text-gray-800">
              Users frequently used external health forums to ask questions and share their experiences.
            </p> 
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Strengthen Behavior Change
            </h3>
            <p className="text-gray-800">
            A comprehensive map of gamification motivators, including social-norms, is successful in driving behavior change.
            </p>
          </div>
          <div className="bg-[#FFF5F0] p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Improve Competitive Positioning
            </h3>
            <p className="text-gray-800">
            RFPs consistently requested social functionality, and major competitors had already introduced community features.
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Understanding the Problem" subheader="Using discovery research to identify risks and opportunities" columns={2} backgroundColor="#FFFAF5" id="understanding-problem">
          <div>
            <p className="text-gray-700 mb-4 max-w-2xl">
              I reviewed broad best practices for designing healthy online communities, then narrowed to research specific to employee wellness environments, privacy expectations, and respectful engagement norms.
            </p>
            <p className="text-gray-700 max-w-2xl">
              I then surveyed users who actively used an employer or health plan provided wellness program to gauge interest and identify expected features. Despite uncertainty around adoption, the business need to remain competitive validated moving forward.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-[#FFD6C2] rounded-lg p-6 shadow-sm">
              <p className="text-4xl font-bold text-gray-800 mb-2">52%</p>
              <p className="text-lg text-gray-700">of respondents used wellbeing tools weekly</p>
            </div>
            <div className="bg-[#FFD6C2] rounded-lg p-6 shadow-sm">
              <p className="text-4xl font-bold text-gray-800 mb-2">44%</p>
              <p className="text-lg text-gray-700">expressed interest in social features</p>
            </div>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Top features expected by survey respondents" columns={3}>
              <div className="text-center">
                <UserCircle size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Profile</p>
                <p className="text-2xl font-bold text-gray-800">80%</p>
              </div>
              <div className="text-center">
                <Users size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Groups</p>
                <p className="text-2xl font-bold text-gray-800">78%</p>
              </div>
              <div className="text-center">
                <Award size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Achievements</p>
                <p className="text-2xl font-bold text-gray-800">77%</p>
              </div>
        </CaseStudySection>
        <CaseStudySection header="Features respondents reported as useful" columns={3}>
        <div className="text-center">
                <Rss size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Feed</p>
                <p className="text-2xl font-bold text-gray-800">94%</p>
              </div>
              <div className="text-center">
                <Users size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Groups</p>
                <p className="text-2xl font-bold text-gray-800">84%</p>
              </div>
              <div className="text-center">
                <Share2 size={32} className="text-[#F4632F] mx-auto mb-2" />
                <p className="font-semibold text-lg text-gray-800 mb-1">Share achievements</p>
                <p className="text-2xl font-bold text-gray-800">64%</p>
              </div>
        </CaseStudySection>
        <CaseStudySection header="Process" subheader="Using rapid iteration and feedback to create alignment" columns={2} backgroundColor="#FFFAF5" id="process">
        <p className="text-gray-700 max-w-2xl mb-4">
              I use pen and paper sketches to map information architecture and wireframes for key screens. Then I translated the wireframes into low-fidelity wireframes in Sketch. Sharing these early artifacts with the PM and design team helped secure alignment on the structure of the product direction.
            </p>
          <div>
            <img src="/com-sketches.png" alt="Sketches showing the information architecture and key screens" className="w-full h-auto rounded-lg overflow-hidden mb-4 shadow-md" />
            <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Sketches showing information architecture and key screens
              </p>
          </div>
          <div className="col-span-2">
          <img src="/com-wireframes1.png" alt="Low fidelity wireframes used to drive alignment with stakeholders" className="w-full h-auto rounded-lg overflow-hidden shadow-md" />
          <p className="text-sm text-gray-600 italic mt-4 text-center px-4">
                Low fidelity wireframes used to drive alignment with stakeholders
              </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="User Testing" columns={1} id="user-testing">
          <div>
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Low-Fidelity Testing
              </h3>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  I tested early wireframes with five users recruited from the earlier discovery survey, all of whom used digital wellbeing applications. 
                  Their feedback surfaced meaningful friction points:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 max-w-2xl">
                  <li>Users wanted filtering options</li>
                  <li>The repeated "recommended" sections across pages spammy and redundant.</li>
                  <li>On the Discover page, the hierarchy of content felt cluttered, making it harder to browse groups confidently.</li>
                </ul>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  Based on this input, I iterated toward a more refined concept and introduced clearer categorization, reduced repetition, and adjusted filtering logic.
                </p>
                <div>
                  <img src="/com-wireframes2.png" alt="Low-fidelity wireframes being tested with users" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                  <p className="text-sm text-gray-600 italic text-center">Low-fidelity wireframes being tested with users</p>
                </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                High-Fidelity Testing
              </h3>
              <div>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  With a more robust prototype, I tested three core tasks with a larger sample:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4 max-w-2xl">
                  <li>Joining a group</li>
                  <li>Creating a post</li>
                  <li>Filtering groups</li>
                </ul>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  Users completed these tasks successfully, validating the general flow. However, the tests revealed that some filtering controls created cognitive overload, so I made adjustments that eventually led to removing certain filters entirely.
                </p>
                <div>
                  <img src="/com-high-fidelity.png" alt="High-fidelity prototype tested with users" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                  <p className="text-sm text-gray-600 italic text-center">High-fidelity screens tested with users</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                Mobile Prototype Testing
              </h3>
              <div>
                <p className="text-gray-700 mb-4 max-w-2xl">
                  Testing on mobile uncovered a critical gap: 
                  users couldn't clearly identify where to find activity related to their own posts or comments. 
                  To resolve this, for the MVP I added a "My Activity" filter to the main feed, ensuring visibility across devices.
                </p>
                <div>
                  <img src="/com-mobile.png" alt="Mobile screens used in testing" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                  <p className="text-sm text-gray-600 italic text-center">Mobile screens used in testing</p>
                </div>
              </div>
            </div>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Design Solution" subheader="An intuitive social wellbeing experience built on common interactions and responsive components" columns={1} id="design-solution">
          <div>
            <p className="text-gray-700 mb-8 max-w-2xl">
              The final solution introduced a structured community experience centered around wellbeing topics, peer discussion groups, and a dedicated Wellness Advocate role to support safety and engagement norms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
                <img src="/com-1st-grow.png" alt="Main feed interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">First time setup</p>
              </div>
              <div>
                <img src="/com-1st-profile.png" alt="Main groups page interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Upload profile image</p>
              </div>
              <div>
                <img src="/com-1st-join.png" alt="Discover groups interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Join first group</p>
              </div>
              <div>
                <img src="/com-lobby.png" alt="Main feed interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Main feed</p>
              </div>
              <div>
                <img src="/com-my-groups.png" alt="Main groups page interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Main groups page</p>
              </div>
              <div>
                <img src="/com-discover.png" alt="Discover groups interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Discover groups</p>
              </div>
              <div>
                <img src="/com-group.png" alt="Nutrition wellbeing group page" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Group page</p>
              </div>
              <div>
                <img src="/com-comment.png" alt="Interface for commenting on a post" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Comment on a post</p>
              </div>
              <div>
                <img src="/com-group-members.png" alt="List of group members page" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Group members page</p>
              </div>
              <div>
                <img src="/com-create-post.png" alt="Create a post interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Create a post</p>
              </div>
              <div>
                <img src="/com-advocates.png" alt="Wellness advocate page interface" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Wellness advocate page</p>
              </div>
              <div>
                <img src="/com-settings.jpg" alt="Community profile settings" className="w-full h-auto rounded-lg overflow-hidden shadow-md mb-2" />
                <p className="text-sm text-gray-600 text-center">Profile settings</p>
              </div>
            </div>
            <p className="text-gray-700 max-w-2xl">
              Creating these flows required rapid prototyping, continuous cross-functional reviews, and thoughtful use of existing design patterns. As the feature matured, I collaborated with engineering to validate feasibility and supported the introduction of new components where necessary.
            </p>
          </div>
        </CaseStudySection>
        <CaseStudySection header="Impact" subheader="The product launch measurably improved user engagement and product competitive positioning, resulting in more sales deals" columns={3} id="impact">
          <div className="md:col-span-3">
            <p className="text-gray-700 max-w-2xl">
              The product design work was complete within 3 months, enabling engineering to execute quickly on the high-visibility project, delivering the MVP within another 3 months.
            </p>
          </div>
        </CaseStudySection>
      </main>
      <PageStepper
        previous={{
          title: 'Unifying the Bitwarden Design Language',
          path: '/bitwarden-design-system'
        }}
      />
      <Footer />
    </div>;
}

