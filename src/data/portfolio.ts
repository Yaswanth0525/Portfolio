import { Project, Experience} from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Campus Placement Portal',
    description: 'Architected a MERN stack platform to streamline placement workflows for 200+ students. Implemented secure JWT-based authentication, reducing unauthorized access attempts by 98%. Integrated real-time notifications with Socket.io to update status changes instantly.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
    githubUrl: 'https://github.com/Yaswanth0525/Placement_portal.git',
    liveUrl: 'https://placement-portal-1-i73t.onrender.com',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Modern Cuts & Styling',
    description: 'Developed a location-aware booking UI using React, Tailwind CSS, and Google Maps API. Enhanced user engagement by 30% through mobile-first responsive design. Managed backend data modelling with Mongoose and optimized queries for performance.',
    techStack: ['React', 'Tailwind CSS', 'Google Maps API', 'MongoDB', 'Mongoose'],
    githubUrl: 'https://github.com/Yaswanth0525/My-Hairstyles.git',
    liveUrl: 'https://my-hairstyles-1.onrender.com',
    imageUrl: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Cloud Computing Intern',
    company: 'HashTek Solutions, Visakhapatnam',
    period: 'Jun 2024 – Jul 2024',
    description: 'Provisioned and maintained AWS EC2 instances and S3 buckets, reducing deployment time by 40%. Designed and implemented IAM policies to enforce least-privilege access, improving security compliance. Automated infrastructure tasks using AWS CLI and CloudFormation scripts.',
    type: 'work'
  },
  {
    id: '2',
    title: 'B.Tech, Computer Science',
    company: 'GMR Institute of Technology, Rajam',
    period: 'Aug 2022 – Present',
    description: 'Currently pursuing Bachelor of Technology in Computer Science with a GPA of 9.1/10. Focus on full-stack development, cloud infrastructure, and DevOps practices.',
    type: 'education'
  },
  {
    id: '3',
    title: 'Intermediate MPC',
    company: 'Chakradhar Junior College',
    period: 'Jul 2020 – Jun 2022',
    description: 'Completed Intermediate education in Mathematics, Physics, and Chemistry with 91.7% marks, building a strong foundation in analytical and problem-solving skills.',
    type: 'education'
  }
];



