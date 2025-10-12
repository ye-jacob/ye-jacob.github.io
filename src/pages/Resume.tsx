const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6">Resume</h1>
        <div className="w-full h-[calc(100vh-12rem)] border border-border rounded-lg overflow-hidden">
          <iframe
            src="/Ye,Jacob.pdf"
            className="w-full h-full"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
