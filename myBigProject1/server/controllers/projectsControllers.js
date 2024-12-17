import Project from "../models/projectsModel.js"; 


// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find(); 
    if (projects.length === 0) {
      return res.status(404).json({ message: "Add a new project to see the projects." });
    }
    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Unknown server error" });
  }
};

// Get a random project
export const getRandomProject = async (req, res) => {
  try {
    const randomProject = await Project.aggregate([{ $sample: { size: 1 } }]); 
    if (randomProject.length === 0) { 
      return res.status(404).json({ message: "Add a new project to see the projects." });
    }
    res.status(200).json(randomProject[0]); 
  } catch (error) {
    console.error("Error fetching random project:", error); 
    res.status(500).json({ error: "Unknown server error" });  
  }
};

// Get a specific project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id); 
    if (!project) { 
      return res.status(404).json({ error: "Project not found" });  
    }
    res.status(200).json(project); 
  } catch (error) {
    console.error("Error finding project by ID:", error); 
    res.status(500).json({ error: "Server error" }); 
  }
};

// Create a new project
export const createProject = async (req, res) => {
  const newProjectData = {
    title: req.body.title,
    description: req.body.description,
    owner: req.body.owner,
    collaborators: req.body.collaborators.split(',').map(collaborator => collaborator.trim()),
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    status: req.body.status
  };

  if (!newProjectData.title) { 
    return res.status(400).json({ error: "Project name is required" });
  }

  const { title, startDate, endDate } = newProjectData;

  if (startDate && new Date(startDate) > new Date()) {
    return res.status(400).json({ error: "Start date must be in the past" });
  }

  if (endDate && new Date(endDate) <= new Date(startDate)) {
    return res.status(400).json({ error: "End date must be later than start date" });
  }

  try {
    const newProject = new Project(newProjectData); 
    await newProject.save();

    return res.status(201).json({ message: "Good job!", project: newProject });
  } catch (error) {
    console.error("Error saving new project:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// Update an existing project
export const updateProject = async (req, res) => {
  try {
    const { title, startDate, endDate } = req.body;

    if (!title) { 
      return res.status(400).json({ error: "Project name is required" });
    }

    if (startDate && new Date(startDate) > new Date()) {
      return res.status(400).json({ error: "Start date must be in the past" });
    }

    if (endDate && new Date(endDate) <= new Date(startDate)) {
      return res.status(400).json({ error: "End date must be later than start date" });
    }

    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
    if (!updatedProject) { 
      return res.status(404).json({ error: "Project not found" });  
    }

    res.status(200).json({ message: "Project updated successfully", project: updatedProject }); 
  } catch (error) {
    console.error("Error updating project:", error); 
    res.status(500).json({ error: "Server error" });  
  }
};

// Delete a project by ID
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id); 
    if (!deletedProject) { 
      return res.status(404).json({ error: "Project not found" }); 
    }

    res.status(200).json({ message: "Project deleted successfully", project: deletedProject }); 
  } catch (error) {
    console.error("Error deleting project:", error); 
    res.status(500).json({ error: "Server error" });  
  }
};

