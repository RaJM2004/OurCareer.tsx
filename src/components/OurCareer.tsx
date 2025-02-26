import React, { useState, useRef, ReactNode } from "react";
import "../styles.css";

// Hero Component Props Interface
interface HeroProps {
  scrollToJobListings: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToJobListings }) => {
  return (
    <div className="hero">
      <h1 className="hero-title">OUR CAREER</h1>
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Join Our Team At <br />
            <span className="highlight">RISK GUARD</span>
          </h1>
          <button className="btn" onClick={scrollToJobListings}>
            See Openings
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/risk3.jpeg" alt="Team Working" />
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="features">
      <div className="features-heading">
        <h1>
          Your Life at <span className="highlight">RISK GUARD</span>
        </h1>
        <h2>JOIN US AND BUILD THE FUTURE</h2>
        <p className="description">
          Ready to join? Our success comes from a passionate team, strong relationships, and a
          commitment to positive impact.
        </p>
        <h3>“ TOGETHER, WE TURN VISION INTO REALITY ”</h3>
      </div>
      <div className="feature-boxes">
        <div className="feature feature-1">People Centricity</div>
        <div className="feature feature-2">Back To Work</div>
        <div className="feature feature-3">Work-Life Balance</div>
        <div className="feature feature-4">Recognition & Rewards</div>
        <div className="feature feature-5">Empowerment & Nurturing</div>
      </div>
    </div>
  );
};

// Job Interface for Typing
interface Job {
  title: ReactNode;
  description: string;
  remote: boolean;
  image: string;
}

// JobListings with forwardRef and proper typing
const JobListings = React.forwardRef<HTMLDivElement>((_, ref) => {
  const jobs: Job[] = [
    {
      title: <h3>Web <br />Development</h3>,
      description: "Code the future!",
      remote: true,
      image: "/images/risk india 2.png",
    },
    {
      title: <h3>Business <br />Consulting</h3>,
      description: "Empower businesses.",
      remote: true,
      image: "/images/rges india 1.png",
    },
    {
      title: <h3>Data <br />Science</h3>,
      description: "Analyze the future.",
      remote: true,
      image: "/images/Group.png",
    },
    {
      title: <h3>Cyber <br />Security</h3>,
      description: "Be the shield!",
      remote: true,
      image: "/images/rges india 1.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);

  const handleApplyClick = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScGt4ufylZLhuY5BZIPwecqTZ9IuxmblXEW0B463PqZrOz-Zg/viewform?usp=dialog";
  };

  return (
    <div className="job-listings" ref={ref}>
      <h2>Our Openings</h2>
      <div className="carousel-container">
        <button className="nav-btn left-btn" onClick={handlePrev}>
          ❮
        </button>
        <div className="job-carousel">
          {jobs.map((job, index) => (
            <div
              className={`job-card ${index === currentIndex ? "center-card" : ""}`}
              key={index}
            >
              <div className="job-image">
                <img src={job.image} alt="job-title" />
              </div>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <span>{job.remote ? "100% Remote" : "Onsite"}</span>
              <button className="apply-btn" onClick={handleApplyClick}>
                Apply
              </button>
            </div>
          ))}
        </div>
        <button className="nav-btn right-btn" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
});

const Resume: React.FC = () => {
  const handleRedirect = () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScGt4ufylZLhuY5BZIPwecqTZ9IuxmblXEW0B463PqZrOz-Zg/viewform?usp=dialog";
  };

  return (
    <div className="upload-section-container animate__animated animate__fadeInUp">
      <div className="upload-section animate__animated animate__zoomIn">
        <h2 className="animate__animated animate__fadeInDown">Didn't find your role?</h2>
        <p className="animate__animated animate__fadeInLeft">
          Upload your resume, and we'll contact you when a suitable role is available.
        </p>
        <button
          className="animate__animated animate__fadeInUp"
          onClick={handleRedirect}
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const jobListingRef = useRef<HTMLDivElement>(null); // ✅ Fixed Type

  const scrollToJobListings = () => {
    if (jobListingRef.current) {
      jobListingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Hero scrollToJobListings={scrollToJobListings} />
      <Features />
      <JobListings ref={jobListingRef} />
      <Resume />
    </div>
  );
};

export default App;
