import { Link } from 'react-router-dom'

function AOSGuideHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-sm">
      <nav className="flex w-full items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Lawbric" className="h-12" />
        </Link>
        <Link
          to="/"
          className="rounded-lg border border-gray-500 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-gray-400 hover:text-white"
        >
          ← Back to Home
        </Link>
      </nav>
    </header>
  )
}

function AOSGuideFooter() {
  return (
    <footer className="bg-black px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Lawbric" className="h-12" />
            </Link>
            <p className="mt-2 text-xs text-gray-500">
              A platform developed by and powered by{' '}
              <a href="#" className="text-gray-400 hover:text-white">Foundry360</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/#features" className="hover:text-white">Features</Link>
            <Link to="/#demo" className="hover:text-white">Demo</Link>
            <Link to="/#demo" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          © 2026 Lawbric. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default function AOSGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <AOSGuideHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <header className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-dark sm:text-4xl lg:text-5xl">
              The Autonomous Law Firm
            </h1>
            <p className="mt-4 text-lg text-lawbric-blue font-medium">
              AI, Automation, and the Future of Legal Operations
            </p>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Executive Summary
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              The legal profession is entering a period of profound transformation. For decades, law firms
              have relied on operational models built around manual coordination, individual expertise, and
              incremental technology adoption. While this model has served the profession well, it is
              increasingly strained by the realities of modern legal practice.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Today's firms face rising caseload complexity, expanding regulatory requirements, and clients
              who expect the speed and transparency they experience in other digital services. Attorneys and
              support staff must manage growing volumes of documentation, communication, compliance
              obligations, and workflow coordination.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              At the same time, advances in artificial intelligence and automation technologies are creating
              new opportunities to fundamentally improve how legal work is organized and delivered.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              A new model is emerging: the <strong>AI-native law firm</strong>. At the center of this transformation is a
              concept known as the <strong>Autonomous Operating System (AOS)</strong>—a technology framework
              designed to automate routine operational tasks, orchestrate workflows across the firm, and
              provide intelligent support to legal professionals.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Rather than replacing attorneys, the Autonomous Operating System enables legal teams to
              focus their time and expertise where it matters most: advising clients, developing legal
              strategies, and delivering outcomes.
            </p>
            <p className="text-gray-text leading-relaxed">
              This whitepaper explores the forces reshaping the legal industry and explains how an
              Autonomous Operating System can help firms modernize operations, increase efficiency, and
              remain competitive in a rapidly evolving legal landscape.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Changing Landscape of Legal Practice
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              For generations, the practice of law has been defined by intellectual rigor, professional
              judgment, and meticulous attention to detail. These characteristics remain central to the
              profession today. What has changed is the environment in which legal services are delivered.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Law firms now operate within a highly interconnected digital ecosystem where information
              moves quickly, expectations evolve rapidly, and operational efficiency has become a critical
              competitive factor.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Clients increasingly expect law firms to deliver services with the same level of responsiveness
              and transparency they experience in other industries. Communication delays, opaque
              processes, and administrative inefficiencies that were once accepted as part of legal practice
              are now seen as barriers to effective service.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Meanwhile, the complexity of legal work continues to grow. Regulatory frameworks expand,
              documentation requirements increase, and cases often involve coordination across multiple
              systems and stakeholders.
            </p>
            <p className="text-gray-text leading-relaxed">
              The result is a profession in which attorneys and their teams spend a substantial portion of their
              time managing operational processes rather than practicing law. This challenge is not simply a
              matter of workload—it is fundamentally an operational problem.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Administrative Burden on Legal Professionals
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              A typical legal matter involves far more than legal analysis and courtroom advocacy. Behind
              every case lies an intricate network of administrative processes.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Client intake forms must be completed and reviewed. Documents must be drafted, revised,
              stored, and shared. Deadlines must be monitored. Communications must be logged.
              Compliance requirements must be verified.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              These tasks are essential to delivering legal services responsibly, but they are rarely the
              activities that drive the strategic value of legal expertise.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Numerous studies across professional services industries indicate that highly trained
              professionals often spend <strong>30 to 50 percent of their time</strong> on administrative and operational
              tasks. For attorneys, this includes activities such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-text leading-relaxed mb-4">
              <li>coordinating internal case workflows</li>
              <li>preparing and formatting documents</li>
              <li>tracking filing deadlines</li>
              <li>managing client communications</li>
              <li>verifying compliance requirements</li>
            </ul>
            <p className="text-gray-text leading-relaxed mb-4">
              While each individual task may appear minor, the cumulative effect can significantly reduce the
              amount of time attorneys spend on billable or strategic work.
            </p>
            <p className="text-gray-text leading-relaxed">
              In many firms, these responsibilities are distributed across attorneys, paralegals, and
              administrative staff, creating a complex web of coordination that must be managed manually.
              This operational burden has become one of the defining challenges of modern legal practice.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Technology Adoption in Law Firms: Progress and Limitations
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              Over the past decade, law firms have adopted numerous technology tools intended to improve
              productivity and organization. These tools have delivered meaningful benefits in areas such as
              document storage, billing, and case management.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              However, most of these systems were designed to address specific functional needs rather than
              to coordinate the entire operational environment of the firm.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              A typical law firm technology stack may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-text leading-relaxed mb-4">
              <li>case management software</li>
              <li>document management systems</li>
              <li>billing and time-tracking platforms</li>
              <li>client relationship management tools</li>
              <li>communication platforms</li>
            </ul>
            <p className="text-gray-text leading-relaxed mb-4">
              While each of these systems performs valuable functions, they often operate independently
              from one another. Information must frequently be transferred between systems manually,
              creating inefficiencies and opportunities for error.
            </p>
            <p className="text-gray-text leading-relaxed">
              As a result, many law firms have accumulated a collection of useful tools without achieving a
              truly integrated operational framework. The next phase of legal technology innovation is
              focused not simply on adding more tools, but on orchestrating how those tools work together.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Rise of Artificial Intelligence in Legal Operations
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              Artificial intelligence is rapidly expanding the capabilities of legal technology. Early applications
              focused on narrow tasks such as document search or contract review. Today, AI systems can
              assist with a wide range of operational and analytical functions.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-text leading-relaxed mb-4">
              <li>summarizing lengthy legal documents</li>
              <li>extracting key information from contracts</li>
              <li>assisting with legal research</li>
              <li>generating structured document drafts</li>
              <li>identifying patterns within case data</li>
            </ul>
            <p className="text-gray-text leading-relaxed mb-4">
              While these capabilities are powerful, their true potential emerges when they are integrated into
              broader operational workflows. Instead of functioning as isolated features, AI tools can become
              part of a larger system that coordinates tasks, manages workflows, and assists legal
              professionals throughout the lifecycle of a case.
            </p>
            <p className="text-gray-text leading-relaxed">
              This integration is the foundation of the Autonomous Operating System model.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Autonomous Operating System for Law Firms
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              An Autonomous Operating System represents a new approach to managing the operational
              complexity of legal practice.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Rather than serving as a single application or software product, the Autonomous Operating
              System functions as an <strong>operational coordination layer</strong> that connects and orchestrates the
              firm's existing technologies and workflows. Its primary role is to manage the flow of work across
              the organization.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              When a new client matter begins, the system can automatically initiate the necessary
              processes—generating intake forms, assigning tasks, scheduling follow-ups, and ensuring that
              compliance requirements are addressed.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              As the matter progresses, the system continues to monitor deadlines, coordinate
              communications, and guide the case through its required stages.
            </p>
            <p className="text-gray-text leading-relaxed">
              This approach transforms legal operations from a manually coordinated environment into a
              structured, intelligent workflow system.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Core Capabilities of the Autonomous Operating System
            </h2>
            <p className="text-gray-text leading-relaxed mb-6">
              An effective Autonomous Operating System typically includes several key functional
              components.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Intelligent Workflow Automation</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              Workflow automation ensures that routine operational tasks occur in the correct sequence
              without requiring constant manual oversight. When a new client matter is opened, the system
              may automatically trigger conflict checks, intake documentation, case file creation, and initial
              task assignments. These workflows reduce the risk of missed steps and ensure consistency
              across cases.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">AI-Assisted Document Processing</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              Documents are central to nearly every aspect of legal practice. AI-assisted tools can
              significantly accelerate creating, reviewing, and organizing legal documents—summarizing
              lengthy materials, identifying key clauses, extracting relevant data, and generating drafts from
              standardized templates. By reducing the time required to process documentation, attorneys can
              devote more attention to analysis and strategy.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Operational Orchestration</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              The system monitors case progress, assigns responsibilities, tracks deadlines, and ensures
              that each stage of a workflow is completed before the next begins. When exceptions occur,
              such as missed deadlines or incomplete documentation, the system can notify the appropriate
              personnel and escalate when necessary.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Client Communication Automation</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              Automated communication capabilities allow firms to send status updates, appointment
              reminders, and document requests automatically based on case events, improving
              responsiveness while maintaining professional oversight.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Operational Analytics and Insight</h3>
            <p className="text-gray-text leading-relaxed">
              Because the Autonomous Operating System tracks operational activity across the firm, it can
              provide valuable insights into performance and efficiency—case throughput, workload
              distribution, response times, and bottlenecks—allowing firms to continuously improve
              processes and allocate resources more effectively.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Practical Use Cases for the Autonomous Operating System
            </h2>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Client Intake and Matter Initiation</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              When a potential client contacts a firm, multiple steps must occur before legal work can begin.
              An Autonomous Operating System streamlines this by orchestrating the entire intake workflow:
              generating intake workflows, digital intake forms, conflict checks, engagement documentation,
              case records, and follow-up activities—often in minutes instead of days.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Case Workflow and Task Coordination</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              The system provides a structured workflow framework that guides each matter through its
              required stages, automatically generating task sequences tailored to case type (e.g., litigation:
              discovery, document review, motion drafting, court deadlines) and advancing the workflow as
              tasks are completed.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Document Preparation and Management</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              AI integrated within an AOS can generate drafts from templates and case information,
              summarize content, extract key clauses, and identify important sections—particularly valuable
              for large volumes of contracts, discovery materials, or regulatory documents.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Deadline and Compliance Management</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              The system continuously monitors case timelines and regulatory requirements, identifies
              relevant deadlines by jurisdiction and case type, integrates them into the workflow, and
              escalates alerts when required actions are incomplete—significantly reducing the risk of
              missed obligations.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Client Communication and Engagement</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              When a case reaches a key milestone, the system can automatically notify the client with
              structured updates. Appointment scheduling, document requests, and reminders can be
              handled through automated communication workflows, keeping clients informed while
              reducing administrative workload.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Document Analysis and Case Intelligence</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              AI tools can assist by identifying relevant information within large document sets—summarizing
              agreements, extracting contractual obligations, or identifying clauses related to liability,
              termination, or compliance—dramatically accelerating the initial review process while leaving
              final interpretation to the attorney.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Internal Knowledge and Research Assistance</h3>
            <p className="text-gray-text leading-relaxed mb-6">
              AI-driven knowledge assistance allows attorneys to search and interact with internal knowledge
              repositories using natural-language questions (e.g., “Have we handled similar cases before?”
              “What precedent documents exist for this type of agreement?”), retrieving relevant materials
              and summarized insights.
            </p>

            <h3 className="text-xl font-semibold text-gray-dark mb-3">Operational Analytics and Firm Performance</h3>
            <p className="text-gray-text leading-relaxed">
              The system can generate analytics on case duration, task completion rates, workload
              distribution, response times, and process bottlenecks, enabling informed decisions about
              staffing, process improvements, and resource allocation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Strategic Value of Automation
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              By automating routine processes and orchestrating workflows, the Autonomous Operating
              System reduces administrative friction and creates a more structured operational environment.
              This allows attorneys to devote more time to activities that require professional judgment and
              legal expertise. For many firms, adopting this model represents the first step toward becoming
              a fully AI-native legal organization.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Benefits of the Autonomous Law Firm Model
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              The adoption of an Autonomous Operating System can produce significant operational and
              strategic benefits: attorneys reclaim time otherwise spent on administrative coordination;
              firms can manage greater case volume without proportionally increasing staff, improving
              scalability and profitability; clients experience faster response times and more transparent
              service; and structured workflow management reduces the risk of missed deadlines or
              incomplete compliance, enhancing operational reliability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Implementation and Adoption Considerations
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              Adopting an AOS does not require replacing all existing technology; in most cases, it can
              integrate with current tools and gradually expand. Successful implementation typically begins
              by identifying high-impact workflows (e.g., client intake, document workflows, case task
              coordination). It is also important to maintain appropriate human oversight—legal judgment
              must remain with qualified professionals. Firms that approach automation incrementally often
              find adoption easier as teams experience the practical benefits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              The Future of AI-Native Law Firms
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              The convergence of artificial intelligence, automation, and digital infrastructure is accelerating
              change. Over the coming decade, many law firms will transition toward operational models that
              incorporate automation and intelligent systems at their core. These AI-native law firms will
              operate with greater efficiency, clearer operational visibility, and enhanced client service
              capabilities. The Autonomous Operating System is a foundational component of this
              transformation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-dark sm:text-3xl border-b border-gray-200 pb-2 mb-6">
              Conclusion
            </h2>
            <p className="text-gray-text leading-relaxed mb-4">
              The demands placed on modern law firms continue to increase in complexity and scale.
              Administrative workloads, fragmented technology systems, and rising client expectations are
              challenging traditional operational models.
            </p>
            <p className="text-gray-text leading-relaxed mb-4">
              Artificial intelligence and automation provide an opportunity to address these challenges in a
              systematic way. By adopting an Autonomous Operating System, law firms can streamline
              operations, reduce administrative burdens, and create a foundation for becoming AI-native
              organizations.
            </p>
            <p className="text-gray-text leading-relaxed">
              Firms that embrace this transformation will be better positioned to deliver efficient, responsive,
              and high-quality legal services in the years ahead.
            </p>
          </section>

          <p className="mt-16 pt-8 border-t border-gray-200">
            <Link to="/" className="text-lawbric-blue font-semibold hover:underline">
              ← Back to Home
            </Link>
          </p>
        </article>
      </main>
      <AOSGuideFooter />
    </div>
  )
}
