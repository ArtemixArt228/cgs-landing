import { CvProject } from "../../types";

const sortCVProjects = (a: CvProject, b: CvProject) => {
  const dateA = a.endDate ? new Date(a.endDate) : new Date("1978/01/01");
  const dateB = b.endDate ? new Date(b.endDate) : new Date("1978/01/01");

  return dateB.getTime() - dateA.getTime();
};

export default sortCVProjects;
