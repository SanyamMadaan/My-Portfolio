import React from 'react';

const Skills = () => {
  const skills = [
    { title: 'Frontend', skills: [{ name: 'HTML' }, { name: 'CSS'}, { name: 'JavaScript'}, { name: 'React.js' }, { name: 'TypeScript' }] },
    { title: 'Backend', skills: [{ name: 'Node.js' }, { name: 'Express' }, { name: 'PHP' }] },
    { title: 'Framework', skills: [{ name: 'Tailwind' }] },
    { title: 'Databases', skills: [{ name: 'MongoDB' }, { name: 'SQL' }, { name: 'PostgreSQL' }] },
    { title: 'ORM', skills: [{ name: 'Prisma' }] },
    { title: 'Programming', skills: [{ name: 'C++' }, { name: 'Java' }, { name: 'Python' }] },
    { title: 'Deployment and Clouds', skills: [{ name: 'AWS' }, { name: 'Cloudflare Workers' }] },
    { title: 'Subjects', skills: [{ name: 'Data Structure and Algorithm(DSA)' }, { name: `Object Oriented Programming(OOp's)` }, { name: 'Relational Database Management System(DBMS)' }, { name: 'Operating System(OS)' }] },
    { title: 'Tools', skills: [{ name: 'Postman' }, { name: 'Github' }, { name: 'Visual Studio Code' }] },
  ];

  return (
    <div id="skills" className="pt:10 lg:pt-20 pb-5 bg-gray-950">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-10">Skills</h1>
        <p className="text-center text-slate-300 md:text-3xl text-xl lg:text-3xl mb-10">Here are some of my skills on which I have been working on for the past 2 years.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="border-solid border-4 border-purple-600 rounded-lg p-6 bg-zinc-900">
              <h2 className="text-3xl font-semibold text-center mb-5">{skill.title}</h2>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, idx) => (
                  <div key={idx} className="rounded-full px-2 py-2  text-white text-xl">{item.name}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
