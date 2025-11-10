import { Microscope, Hospital, GraduationCap, FileText, Code, Award, Mail } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const researchExperience = [
    {
      title: "Jaeger Corporation & Shenandoah Medical Center",
      period: "Aug 2025 – Present",
      description: [
        "Performing TG-51 calibration and quality assurance using QUASAR Phantom and ArcCHECK",
        "Utilizing Varian Velocity for adaptive image registration and treatment planning",
      ],
    },
    {
      title: "University of Nebraska Medical Center",
      period: "Aug 2024 – May 2025",
      description: [
        "Developed adaptive radiotherapy methods for head and neck cancers",
        "Performed treatment plan reoptimization using Varian Eclipse TPS",
      ],
    },
    {
      title: "University of Southern Mississippi & Forrest General Hospital",
      period: "Aug 2023 – Jul 2024",
      description: [
        "Conducted radiation-shielding calculations for a new cancer center facility",
        "Performed mean-field theory study on relativistic meson–nucleon models",
      ],
    },
    {
      title: "Tribhuvan University",
      period: "Graduate & Undergraduate",
      description: [
        "Conducted studies on magnetic topological insulators",
        "Researched plasma-based surface modification techniques",
      ],
    },
  ];

  const medicalExperience = [
    {
      title: "Creighton University",
      period: "Summer 2025",
      description: [
        "Lung SBRT planning with TG-101 quality assurance protocols",
        "DVH optimization and CBCT-CT alignment for treatment planning",
      ],
    },
    {
      title: "Shenandoah Medical Center",
      period: "Aug 2025 – Present",
      description: [
        "Beam profile analysis and Winston–Lutz testing",
        "DQA3 quality assurance for radiation therapy equipment",
      ],
    },
    {
      title: "Methodist Estabrook Cancer Center",
      period: "June 2022 – Present",
      description: [
        "Quality assurance on Varian TrueBeam linear accelerator",
        "Portal dosimetry and IMRT/VMAT verification",
      ],
    },
    {
      title: "CHI Health Creighton Bergan Mercy",
      period: "June 2022 – Present",
      description: [
        "HDR prostate brachytherapy workflow optimization",
        "CT quality assurance protocols",
      ],
    },
    {
      title: "Forrest General Hospital",
      period: "June 2022 – Present",
      description: [
        "IMRT/SRS quality assurance procedures",
        "Multi-isocenter brain SRS observation and analysis",
      ],
    },
  ];

  const teaching = [
    {
      title: "Graduate Teaching Fellow – Creighton University",
      period: "Aug 2024 – Present",
      description: "Teaching PHY205 & PHY206 labs, grading assignments, conducting quizzes, and holding office hours for student support.",
    },
    {
      title: "Graduate Teaching Assistant – University of Southern Mississippi",
      period: "Aug 2023 – Jul 2024",
      description: "Teaching PHYS111L & 112L labs, providing individual student support, and reporting lab progress to faculty.",
    },
    {
      title: "Physics Lecturer & IT Head – Janaadarsha Amarsingh School, Nepal",
      period: "Aug 2021 – Jul 2023",
      description: "Taught Physics & Mathematics, led IT integration initiatives, and trained teachers on educational technology.",
    },
  ];

  const skills = {
    clinical: ["Eclipse TPS", "Velocity (Image Registration)", "QUASAR Phantom", "ArcCHECK", "DQA3"],
    programming: ["Python", "MATLAB", "Fortran", "LaTeX"],
    simulation: ["BioRender", "BURAI", "VESTA", "Quantum ESPRESSO", "FPLO"],
    mathematics: ["Linear Algebra", "Probability", "Statistics", "Calculus", "Complex Analysis"],
    productivity: ["Microsoft Office Suite", "Google Workspace"],
  };

  const awards = [
    "Sigma Pi Sigma Honor Society – Member (May 2025 – Present)",
    "AAPM (American Association of Physicists in Medicine) – Student Associate Member (Sep 2023 – Present)",
    "APS (American Physical Society) – Student Member (Aug 2023 – Present)",
    "Association of Nepali Physicists in America – Member (Aug 2023 – Present)",
    "Creighton University Teaching Fellowship (2024 – Present)",
    "University of Southern Mississippi Teaching Assistantship (2023–2024)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <Sidebar />
          </div>

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-16">
            {/* Hero Section */}
            <section id="home" className="py-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Shankar Sapkota
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                A Medical Physics graduate student at Creighton University, passionate about advancing radiation therapy, 
                image-guided treatment planning, and computational modeling in healthcare. My work bridges research and 
                clinical practice to enhance patient care through precision medical physics.
              </p>
            </section>

            {/* Education Section */}
            <section id="education" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Education</h2>
              <div className="prose max-w-none">
                <div className="mb-6">
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Master of Science, Medical Physics</p>
                      <p className="text-muted-foreground">Creighton University (Anticipated May 2026)</p>
                      <p className="text-sm text-muted-foreground">Thesis: Quality Assurance for Prostate SBRT Commissioning</p>
                    </div>
                    <div>
                      <p className="font-medium">M.Sc. Physics</p>
                      <p className="text-muted-foreground">Tribhuvan University, Nepal (Dec 2022)</p>
                    </div>
                    <div>
                      <p className="font-medium">Graduate Study in Physics (Computational Science)</p>
                      <p className="text-muted-foreground">University of Southern Mississippi (2023–2024)</p>
                      <p className="text-sm text-muted-foreground">27/30 credits completed before transfer</p>
                    </div>
                    <div>
                      <p className="font-medium">B.Sc. Physics and Mathematics</p>
                      <p className="text-muted-foreground">Tribhuvan University (Dec 2018)</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  My academic journey has taken me from fundamental physics and mathematics in Nepal to specialized 
                  computational science at the University of Southern Mississippi, and now to medical physics at 
                  Creighton University. This diverse educational background has equipped me with a unique blend of 
                  theoretical knowledge, computational skills, and practical clinical experience. My work focuses on 
                  advancing radiation therapy techniques, with a particular emphasis on quality assurance, treatment 
                  planning optimization, and the application of computational methods to solve complex problems in 
                  medical physics.
                </p>
              </div>
            </section>

            {/* Research Experience Section */}
            <section id="research" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Research Experience</h2>
              <div className="space-y-6">
                {researchExperience.map((experience, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Medical Experience Section */}
            <section id="medical" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Medical Experience</h2>
              <div className="space-y-6">
                {medicalExperience.map((experience, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Teaching Section */}
            <section id="teaching" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Teaching</h2>
              <div className="space-y-6">
                {teaching.map((exp, index) => (
                  <div key={index} className="bg-muted/30 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Publications</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  Wang S., Bhandari A., Johnson K., Oh K., Yu F., Lei Y., <strong>Sapkota S.</strong>, Zhou S., Baine M.J., Lin C., Zhang C. (2025).
                </p>
                <p className="font-semibold mb-2">
                  "Developing a Novel Time-to-Event Dosiomics Model to Predict Treatment Failure in NSCLC Patients Receiving Stereotactic Body Radiotherapy."
                </p>
                <p className="text-sm text-muted-foreground">
                  <em>Radiotherapy and Oncology</em>, 206:S3724–S3727, Elsevier.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Clinical & Imaging Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.clinical.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Simulation Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.simulation.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Mathematical Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.mathematics.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Productivity Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.productivity.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Awards & Memberships Section */}
            <section id="awards" className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">Awards & Memberships</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <li key={index} className="text-muted-foreground flex items-start">
                      <Award className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="scroll-mt-20">
              <div className="bg-muted/30 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
                <p className="text-muted-foreground mb-6 text-center max-w-2xl mx-auto">
                  I'm always open to discussing research opportunities, collaborations, or questions about medical physics.
                </p>
                <div className="space-y-4 max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:Shankar.Sapkota10@gmail.com" className="text-muted-foreground link-hover">
                      Shankar.Sapkota10@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Omaha, NE</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button size="lg" asChild>
                    <a href="mailto:Shankar.Sapkota10@gmail.com">Send Email</a>
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
