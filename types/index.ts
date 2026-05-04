export type Job = {
  id: string;
  created_at: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  categoryId: string;
  jobType: string;
  description: string;
  requirements: string;
  category: {
    id: string;
    name: string;
  };
};

export type Category = {
  id: string;
  created_at: string;
  name: string;
};

export type Applications = {
  id: string;
  created_at: string;
  fullname: string;
  email: string;
  jobId: string;
};
