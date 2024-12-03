export default function ProjectDetail({ params }) {
    const { index } = params; // Get the dynamic route parameter
  
    // Example data: Replace with real data or fetch logic
    const projectDetails = [
      { title: "Project 1", description: "Description for Project 1" },
      { title: "Project 2", description: "Description for Project 2" },
      { title: "Project 3", description: "Description for Project 3" },
    ];
  
    const project = projectDetails[index]; // Get the project by index
  
    if (!project) {
      return <div>Project not found!</div>;
    }
  
    return (
      <div className="p-6 text-white bg-[#181818] min-h-screen">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p>{project.description}</p>
      </div>
    );
  }
  