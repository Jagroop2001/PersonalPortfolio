import { useState, useEffect } from 'react';
import SkillBar from '@/components/SkillBar';
import useActivePage from '@/hooks/useActivePage';
import { FiExternalLink } from 'react-icons/fi';

const ResumePage = () => {
  useActivePage('Resume');
  
  // Fade in animation effect
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ opacity, transition: 'opacity 300ms ease-in-out' }}>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Resume</span>
        </h2>
        
        {/* Summary Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-800">Summary</h3>
          <p className="text-gray-700">
            4+ years of experience, including Product Management, Software Development, and AI, with a proven track record of launching 4+ MVPs end-to-end—from user discovery to product launch—resulting in a total profit of $40K+.
          </p>
        </div>
        
        {/* Experience Section */}
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-800">Experience</h3>
          
          <div className="border-l-2 border-secondary pl-4 mb-6">
            <h4 className="text-lg font-medium text-gray-800">Technical Product Manager</h4>
            <p className="text-sm text-gray-600 font-medium">RTE Softwares LLP - 01/2023 - Present</p>
            <ul className="text-sm text-gray-600 mt-2 list-disc ml-4 space-y-1">
              <li>Launched Flashbuild.ai MVP, adopted by 50% of target users within 2 months by refining onboarding UX and reducing user friction by 70%, boosting client conversion.</li>
              <li>Drove $12K/month revenue for Flashbuild.ai in 2 months through dual monetization and reduced operational costs by 30% by converting Meet Aido into a recurring subscriber.</li>
              <li>Led a cross-functional team of 5 developers, 2 testers, and senior leadership to deliver Flashbuild.ai's MVP in 4 weeks.</li>
              <li>Onboarded and managed 10+ Upwork clients in 2 months, ensuring project delivery, communication, and client retention.</li>
              <li>Boosted Meet Aido's engagement metrics and client acquisition by deploying AI-powered RAG, leading to contracts with U.S. universities.</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-secondary pl-4">
            <h4 className="text-lg font-medium text-gray-800">Full Stack Developer</h4>
            <p className="text-sm text-gray-600 font-medium">Solitaire Infosys Pvt. Ltd - 01/2021 - 12/2022</p>
            <ul className="text-sm text-gray-600 mt-2 list-disc ml-4 space-y-1">
              <li>Boosted monthly active users (MAU) by 15% through performance enhancements, improving user engagement and retention by 18%.</li>
              <li>Migrated Cheetah Learning's legacy .NET systems to MERN Stack and Django, reducing technical debt by 30% and enhancing platform scalability.</li>
              <li>Optimized backend with Redis, cutting server response times by 35% and improving system reliability.</li>
            </ul>
          </div>
        </div>
        
        {/* Education Section */}
        <div>
          <h3 className="text-xl font-medium mb-4 text-gray-800">Education</h3>
          
          <div className="border-l-2 border-primary pl-4">
            <h4 className="text-lg font-medium text-gray-800">B.Tech. (Computer Science & Engineering)</h4>
            <p className="text-sm text-gray-600">I. K. Gujral Punjab Technical University - 08/2018 - 08/2022</p>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product Management Skills */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Product Management</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Technical Architecture</li>
              <li>Product Strategy</li>
              <li>User-Centric Design</li>
              <li>MVP Launch</li>
              <li>Roadmapping</li>
              <li>Cost Optimization</li>
              <li>Data-Driven Decisions</li>
              <li>LLM/AI Integration</li>
              <li>Stakeholder Management</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
          
          {/* Technical Skills */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Technical Skills</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>MERN Stack</li>
              <li>SQL</li>
              <li>Advanced Excel</li>
              <li>REST APIs</li>
              <li>LLM/RAG Integration</li>
              <li>AWS</li>
              <li>Python</li>
              <li>Web Hosting & Deployment</li>
              <li>AI-based Workflow Automation</li>
              <li>Prompt Engineering</li>
            </ul>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Tools</h3>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>JIRA</li>
              <li>Confluence</li>
              <li>Figma</li>
              <li>Microsoft tools</li>
              <li>Notion</li>
              <li>Postman</li>
              <li>New Relic</li>
              <li>Mixpanel</li>
              <li>Logrocket</li>
              <li>Google Analytics</li>
              <li>PRD Documentation</li>
              <li>Asana</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Key Achievements & Certifications */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          <span className="inline-block pb-1 border-b-2 border-secondary">Achievements & Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Key Achievements */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800">Key Achievements</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Product Adoption Strategy</h4>
                <p className="text-sm text-gray-600">Conducted internal workshops on Flashbuild (No code backend builder), and organized office hackathons to drive adoption and engagement of product.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Event Strategy & Execution</h4>
                <p className="text-sm text-gray-600">Organized hackathon in 2021 with 16K+ participants from India, Nepal, Bangladesh, and Sri Lanka; successfully executed during lockdown with virtual coordination.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Audience Building</h4>
                <p className="text-sm text-gray-600">Product & Technical Content Writer on DEV platform with 24K+ followers</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Collaborating with Global Developers</h4>
                <p className="text-sm text-gray-600">Stack Overflow contributor with 20K+ reputation points and a reach of over 130K+ developers.</p>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div>
      <h3 className="text-lg font-medium mb-4 text-gray-800">Certifications</h3>
      <ul className="list-disc  space-y-2 text-gray-700">
        <li className="flex items-center">
          Foundations of Project Management, Google.
          <a
            href="https://coursera.org/share/543bbb224431c35a42aa2820a69dab89"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
        <li className="flex items-center">
          Data Cleaning, Kaggle.
          <a
            href="https://www.kaggle.com/learn/certification/jagroop2001/data-cleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
        <li className="flex items-center">
          Data Visualization, Kaggle.
          <a
            href="https://www.kaggle.com/learn/certification/jagroop2001/data-visualization"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
        <li className="flex items-center">
          Machine Learning, Kaggle.
          <a
            href="https://www.kaggle.com/learn/certification/jagroop2001/intro-to-machine-learning"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
        <li className="flex items-center">
        GenAI Course with Langchain &amp; Huggingface, Udemy.
          <a
            href="https://drive.google.com/file/d/1JlIAhRyisOOIAHefIyx-2QILy7bi04ap/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center"
          >
            <FiExternalLink />
          </a>
        </li>
      </ul>

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4 text-gray-800">Contact Information</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li className="flex items-center">
            <span className="font-medium">Email:</span> jagroop.product@gmail.com
          </li>
          <li className="flex items-center">
            <span className="font-medium">Phone:</span> +91 9872869405
          </li>
          <li className="flex items-center">
            <span className="font-medium">Location:</span> India
            {/* if you have a map link, replace href="#" */}
          </li>
        </ul>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
