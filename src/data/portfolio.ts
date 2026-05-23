import { Project, Experience } from '../types';

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
    title: 'AWS & Cloud Computing Intern',
    company: 'HashTek Solutions, Visakhapatnam',
    period: 'Jul 2025 – Oct 2025',
    description: 'Learned AWS cloud services (EC2, S3, IAM), Docker, CI/CD pipelines, and deployment automation. Gained practical experience in cloud infrastructure, security, monitoring, and DevOps workflows.',
    type: 'work'
  },
  {
    id: '2',
    title: 'B.Tech, Computer Science',
    company: 'GMR Institute of Technology, Rajam',
    period: 'Aug 2022 – Apr 2026',
    description: 'Completed Bachelor of Technology in Computer Science with a GPA of 9.0/10. Focus on full-stack development, cloud infrastructure, and DevOps practices.',
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

// Updated Certifications & Publications
export const certifications = [
  { id: 'c1', title: 'ServiceNow Certified Application Developer (CAD)', issuer: 'ServiceNow', date: 'Jun 2025', credentialUrl: 'https://drive.google.com/file/d/1Sa1gOKnhgYBm9S0sd3TzkxIcCbVHi9AO/view?usp=drivesdk' },
  { id: 'c2', title: 'ServiceNow Certified System Administrator (CSA)', issuer: 'ServiceNow', date: 'Mar 2025', credentialUrl: 'https://drive.google.com/file/d/1g8OdchL00sSIbpZRmRYCi9W5rCTxXxdN/view?usp=drivesdk' },
  { id: 'c3', title: 'Full Stack Web Developer Mastery', issuer: 'L&T', date: 'Nov 2025', credentialUrl: 'https://drive.google.com/file/d/1Vqgaw60OQdvI3GYMjx1tE1xK-eALb62A/view?usp=drivesdk' },
  { id: 'c4', title: 'Comprehensive DevOps and CI/CD Tools Mastery', issuer: 'L&T', date: 'Sep 2025', credentialUrl: 'https://drive.google.com/file/d/1_jGtcOlUJu31tbAV_4dLyj7eGaqdaVPc/view?usp=drivesdk' },
];

export const publications = [
  { id: 'p1', title: 'Deep Learning for Real-Time Object Detection in Autonomous Vehicles', venue: 'International Journal of Research Publication and Reviews (IJRPR)', date: 'Dec 2024', link: '' },
  { id: 'p2', title: 'Enhanced Document Intelligence and Task Handling', venue: 'International Journal of Progressive Research in Engineering Management and Science (IJPREMS)', date: 'Mar 2026', link: '' },
];

export const awards = [
  { id: 'a1', title: 'CodeChef 500+ Problems', description: 'Combined milestone across LeetCode and CodeChef' },
  { id: 'a2', title: '100 Days Streak', description: 'Maintained 100-day coding streak' },
];

export const codingStats = {
  totalQuestions: 814,
  totalActiveDays: 345,
  totalContests: 43,
  leetcodeContests: 7,
  codechefContests: 36,
  fundamentalsSolved: 7,
  dsaSolved: { easy: 120, medium: 148, hard: 7 },
};



