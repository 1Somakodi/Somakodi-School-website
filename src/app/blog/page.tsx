"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  Chip,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

/* ----------------------------------
   TYPES
----------------------------------- */
type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
};

/* ----------------------------------
   BLOG DATA
----------------------------------- */
const BLOGS: BlogPost[] = [
  {
    id: "how-to-start-a-tech-career-kenya",
    title: "How you can start a career in Tech  in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming, but it’s also one of the most powerful and life-changing journeys you can begin. With so many roles, tools, and learning paths available, it’s easy to feel stuck or unsure of where to start. Today I’ll walk you through the essential skills you need to focus on, and practical steps you can take to confidently build your future in tech no matter where you’re starting from.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Technology has become one of the most accessible career paths in Kenya today. From Nairobi’s startup ecosystem to global remote teams, tech skills are opening doors for people from all walks of life and you don’t need to come from a computer science background to succeed. What matters most is how you approach learning and growth.

A tech career is broader than many people assume. It includes roles such as software development, quality assurance, data analysis, cybersecurity, product support, and digital design. Some roles are more technical than others and the ones I have listed are just the a small fraction of the no of available roles in tech. Many of these tech roles allow for beginners - starting from junior roles - to grow gradually and gain experertise while working. Understanding this early helps reduce the pressure of “knowing everything” before starting.

![Learning tech](/image/blogs/events/blogpic1.jpg)

## Step 1: Choose Your Path
For most beginners in Kenya, software and web development remain one of the most practical entry points. Learning how websites and applications work, from the user interface to the backend logic, builds transferable skills that can be used in employment, freelancing, or entrepreneurship. Other learners may find QA testing or data-related roles more aligned with their strengths, especially if they enjoy analysis or attention to detail.

Choosing how to learn is just as important as choosing what to learn. Coding bootcamps provide structured learning, mentorship, accountability, and hands-on projects, making them ideal for career switchers and beginners who need guidance. Self-learning is also possible, especially with the abundance of free resources online, but it requires strong discipline and clear goals. Many successful learners combine both approaches to reinforce understanding.

## Step 2: Build Real Projects
Beyond skills, mindset plays a critical role in building a tech career. Learning to code involves confusion, errors, and constant problem-solving. Feeling stuck is not a sign of failure, it is part of the process. Learners who succeed are those who stay curious, practice consistently, and learn how to break problems into smaller, manageable steps.

Building projects early helps turn theory into real ability. Simple websites, small applications, and practice exercises help reinforce learning and create a portfolio that demonstrates what you can actually do. In tech hiring, proof of work often matters more than certificates alone.

AI tools are now part of the modern learning experience. Used correctly, they can help explain errors, clarify concepts, and speed up experimentation. However, relying on AI without understanding leads to shallow learning. The goal is to use AI as a guide, not a replacement for thinking and problem-solving.

![Project work](/image/blogs/events/blogpic2.jpg)

## Step 3: Community & Mentorship
As you prepare for your first opportunity, remember that it may not look perfect. Many people start with internships, junior roles, freelance gigs, or volunteer projects. These early experiences build confidence, exposure, and credibility. Over time, skills compound, and better opportunities follow.

Community is another powerful factor in Kenya’s tech ecosystem. Networking through meetups, online groups, LinkedIn, and peer communities helps learners stay motivated and informed. Many opportunities come through relationships and shared learning rather than job boards alone.

A tech career does not end after your first role. Technology evolves constantly, and continuous learning is part of the journey. With time, experience, and focus, learners can grow into senior roles, specialize in new areas, or even build their own products and companies.

![Project work](/image/blogs/events/myths.jpg)

## Common Myths About Starting a Tech Career
1 - “You must be good at math to succeed in tech.”
Most beginner and entry-level tech roles do not require advanced math skills. What matters more is logical thinking, problem-solving, and the ability to learn step by step.

2 - “You need a university degree to work in tech.”
A degree can be helpful, but it is not a requirement for most tech roles today. Employers increasingly focus on skills, portfolios, and real-world experience. Bootcamp graduates, self-taught developers, and career switchers are regularly hired based on what they can build and explain not just their academic background.

3 - “You’re too old to start a tech career.”
Tech does not have an age limit. Many people in Kenya start learning tech in their late 20s, 30s, or even 40s after working in other industries. Maturity, discipline, and real-world experience often become advantages, especially in teamwork, communication, and problem-solving.

4 - “Tech jobs are only for geniuses.”
This myth discourages many beginners before they even try. Tech skills are learned, not inherited. Everyone struggles at the beginning. Progress comes from consistent practice, asking questions, and building small wins over time, not from being “naturally smart.”

5 - “Once you finish a bootcamp, you’re guaranteed a job.”
Bootcamps provide a foundation, not instant success. Graduates still need to practice, apply, improve portfolios, and continue learning. Those who treat bootcamp graduation as the starting line and not the finish line, are the ones who succeed.

## Final Thoughts
Starting a tech career in Kenya is achievable for anyone willing to commit to learning, practice consistently, and seek the right support. With practical skills, the right mindset, and hands-on experience, tech offers long-term growth, flexibility, and access to global opportunities.
`,
},
{
  id: "vibe-coding-vs-learning-to-code",
  title: "Vibe Coding vs Learning to Code: What Really Builds a Tech Career?",
  category: "Careers",
  excerpt:
    "With AI tools making it easier than ever to generate code instantly, a new trend known as 'vibe coding' has emerged. It promises fast results with minimal effort, but does it actually prepare you for a real tech career? Lets break down vibe coding versus learning to code properly, and explain which path truly sets you up for long-term success in tech.",
  image: "/image/blogs/events/vibe.jpg",
  content: `
## Introduction
The way people learn tech is changing rapidly. Today, anyone can describe an idea to an AI tool and get working code in seconds. This has given rise to what many call vibe coding which is building applications by relying heavily on AI-generated code, tutorials, and copy-paste solutions, often without fully understanding how or why the code works. On the other hand, learning to code focuses on understanding fundamentals, problem-solving, and gradually building skills through practice. Both approaches exist in today’s tech landscape, but they lead to very different outcomes, especially for beginners in Kenya who are aiming for real jobs, freelancing, or long-term growth. Understanding the difference early can save you time, frustration, and false expectations.

## What Is Vibe Coding?
Vibe coding is driven by speed and experimentation. You follow the “vibe” — asking AI tools to generate features, fixing errors by trial and error, and moving on once something works. This approach can feel exciting and empowering, especially for beginners who want to see results quickly.

Vibe coding works well for:
- Rapid prototypes and demos  
- Exploring ideas without deep technical pressure  
- Non-technical founders testing concepts  
- Short-term personal projects  

However, because the focus is on output rather than understanding, many vibe coders will struggle when things break, requirements change, or they are asked to explain their work. When an application stops working, they often don’t know where to start debugging because they didn’t write the logic themselves or understand how the different parts of the system connect. Small changes such as adding a new feature, fixing a performance issue, or integrating another service can quickly become overwhelming.

In real-world settings, developers are expected to explain their decisions, justify why certain approaches were used, and collaborate with others on shared codebases. Vibe coders who rely heavily on generated solutions may find it difficult to communicate their reasoning, review other people’s code, or adapt when tools fail or produce incorrect results. Over time, this gap in understanding can limit growth, reduce confidence, and make it harder to transition from experimenting with code to working professionally in a team or production environment.

![Learning tech](/image/blogs/events/vibe1.jpg)

## What Does It Mean to Truly Learn to Code?
Learning to code goes deeper than making things “work.” It involves understanding how software is structured, how logic flows, and how systems behave when things go wrong. This includes learning concepts like variables, functions, data structures, APIs, databases, and debugging.

This approach takes more time and effort, but it builds:
- Strong problem-solving skills  
- Confidence to debug and improve code  
- Ability to learn new languages and tools  
- Readiness for real-world team environments  

For learners aiming at employment or serious freelancing, a strong foundation in coding is essential. AI is not the enemy of learning to code, its misuse is. When learners rely on AI to do all the thinking, they miss the opportunity to build mental models, reasoning skills, and true problem-solving ability. However, when used intentionally, AI becomes a powerful learning companion rather than a crutch.

The most effective learners use AI to support their growth, not replace it. They turn to AI to help explain errors and complex concepts, suggest improvements to their code, compare different approaches to solving a problem, and speed up experimentation after they understand the basics. This approach allows learners to move faster while still strengthening their understanding and confidence.

Employers care deeply about this difference because real tech roles demand more than producing working code. Developers are expected to read and understand existing codebases, fix bugs under pressure, explain their decisions clearly, adapt to new tools and frameworks, and collaborate with other developers. Vibe coding alone rarely prepares learners for these realities. Learning to code builds resilience when AI fails, requirements change, or systems behave unexpectedly, it is foundational knowledge that carries professionals through.

![Project work](/image/blogs/events/vibe2.jpg)

## Common Myths About Vibe Coding vs Learning to Code
1 - AI will replace the need to learn coding.
AI changes how we code, not the need to understand it. Those who understand fundamentals will always outperform those who only rely on tools.

2 - If the app works, understanding doesn’t matter.
In production environments, maintenance, scalability, and security matter just as much as functionality. Understanding is non-negotiable.

3 - Learning to code is too slow in today’s fast world.
While learning takes time, it saves years of struggle later. Strong foundations allow faster growth over time.

4 - Vibe coding is cheating.
It’s not cheating — it’s incomplete on its own. When combined with learning, it becomes powerful. When used alone, it becomes limiting.

5 - You must choose one approach forever.
The best developers combine both. They learn deeply, then use AI to move faster and smarter.

## Final Thoughts
Vibe coding can be fun, motivating, and useful, but it is not a substitute for learning to code if your goal is a real tech career. For beginners in Kenya, especially career switchers and working professionals, investing time in fundamentals pays off in confidence, employability, and long-term growth. To suceed in as a in programming focus on practical learning that is, understanding first, building second, and using modern tools responsibly. That balance is what turns you from a beginner into a professional problem-solver.
`,
},
{
  id: "inclusion-diversity-kenya-tech-landscape",
  title: "Inclusion and Diversity in Kenya’s Tech Landscape",
  category: "Industry",
  excerpt:
    "Kenya’s tech ecosystem is growing rapidly, from fintech innovations and startup hubs to remote work opportunities, but true progress depends on who gets access to opportunities. Inclusion and diversity are essential for innovation, economic growth, and social impact. This article explores the realities of inclusion in Kenya’s tech landscape and how coding bootcamps like are helping to bridge gaps.",
  image: "/image/blogs/events/inclusion.jpg",
  content: `
## Introduction
Kenya is one of Africa’s most vibrant tech ecosystems. From fintech innovations and startup hubs to remote work opportunities that connect local talent with global companies, technology is reshaping the economy. But as the landscape grows, so do the questions about who is included and who is left behind. Inclusion and diversity in the tech sector mean more than welcoming varied voices. They mean ensuring equal access to skills, devices, connectivity, mentorship, jobs, and leadership opportunities for all regardless of gender, ability, location, or wealth.

![Inclusive tech](/image/blogs/events/inclusion5.jpg)

## Misconceptions That Hold Back Inclusion and diversity in tech.
Diversity and inclusion have become more than just buzzwords in today's workplace and society. They represent a strategic approach to building a workforce that reflects the rich tapestry of our society and unlocks the full potential of every employee and individual. Yet some still Misconceptions hold back inclusion and diversity in tech space such as:

1 - Tech growth automatically includes everyone.  
The rapid growth of Kenya’s tech ecosystem often creates the illusion that opportunity is evenly distributed. While we see more startups, tech hubs, and job openings, this growth does not automatically translate into access for everyone. Systemic barriers, especially financial ones, continue to exclude large segments of the population. For many professionals seeking a career change, the cost of training, time away from income generating work, and lack of financial safety nets make transitioning into tech extremely difficult. Youth from low-income households often face pressure to earn immediately rather than invest time in learning new skills. Women, particularly those with caregiving responsibilities, struggle to balance  domestic work with intensive learning schedules. People from underserved communities may lack exposure, mentorship, or role models in tech, making the pathway feel inaccessible or unrealistic. For people living with disabilities, inaccessible learning environments and limited support structures further widen the gap.

2 - Everyone has the tools they need.  
Kenya’s high smartphone penetration is often mistaken for digital readiness, yet smartphones alone are not sufficient for meaningful tech learning. Coding, data analysis, cybersecurity labs, and software development require laptops or desktop computers, reliable keyboards, adequate processing power, and stable internet connections. The cost of purchasing a computer remains prohibitively high for many households. For learners who do manage to acquire a device, maintaining consistent and fast internet access is another major challenge. Learning platforms rely heavily on video tutorials, cloud tools, downloads, and live sessions, all of which consume significant data. Frequent power outages, shared devices, or reliance on public Wi-Fi further disrupt learning consistency.

3 - Diversity is just a buzzword.  
Diversity in tech is sometimes dismissed as a checkbox exercise rather than a meaningful driver of innovation. In reality, diverse teams consistently outperform homogeneous ones because they bring varied lived experiences, perspectives, and ways of thinking into problem-solving. In a country as socially and economically diverse as Kenya, technology built by narrow groups often fails to address real-world challenges faced by the majority. Homogeneous teams may overlook accessibility needs, cultural nuances, or socioeconomic realities. Inclusive teams, on the other hand, are more likely to design solutions that are practical, user-centered, and scalable. Beyond innovation, diversity also strengthens trust and adoption. 

These misconceptions create blind spots that slow down true inclusion when we focus only on participation numbers instead of access and equity.

![Inclusive tech](/image/blogs/events/inclusion2.jpg)
## The Wealth Divide and Its Impact on Tech Inclusion
Kenya’s economy boasts impressive tech success stories, from billion-shilling fintech startups to globally competitive innovation hubs. However, this visible success exists alongside deep and persistent inequality. Recent 2025 December reports highlight that a very small elite — the richest 125 Kenyans — hold more wealth than over 42 million citizens combined, while the richest 1% control a disproportionate share of the country’s total wealth. This level of economic concentration means that opportunity, security, and access to resources are unevenly distributed across society.

This inequality has direct consequences for tech inclusion. Learning technology skills is not free, even when courses are marketed as affordable or online. Tech education requires financial stability to cover tuition fees, learning devices such as laptops, reliable internet connectivity, electricity, and in many cases transport or quiet study spaces. Lack of stable or enough income means affects youth from low-income households, women with caregiving responsibilities, professionals trying to transition from low-paying or unstable jobs, and people living with disabilities who may already face higher living costs. As a result, talent in tech is not lacking, access is.

When tech education remains closely tied to financial privilege, the industry risks reproducing the same inequalities found in the wider economy. Those who already have resources gain more opportunities, while capable and motivated individuals are locked out before they can meaningfully participate. Addressing tech inclusion therefore requires confronting economic inequality directly and designing learning pathways that recognize and accommodate these financial realities.

## The Digital Divide: Devices and Connectivity
While Kenya has made strides in mobile phone adoption, access to computers and reliable internet remains limited. Household computer access is just over 10% nationally, with urban areas like Nairobi far ahead of most rural counties. Internet usage and broadband also show deep gaps between regions and income groups, leaving many households disconnected or frequently offline.
For learners, this means, difficulty completing coding labs or projects that require a laptop with a keyboard and browser, inability to download or stream learning videos due to slow or expensive data, reliance on borrowed devices or public internet hubs, which limits consistent practice. These challenges slow down learning and discourage many potential tech learners—especially those from low-income backgrounds.

## Challenges Faced by Women and People with Disabilities
Despite impressive progress in tech adoption, women and people with disabilities (PWDs) still face systemic barriers. Studies show women are significantly less likely than men to use advanced digital services or own smartphones at the same rate. which affects learning opportunities, professional networks, and visibility in tech roles. Also cultural expectations, caregiving responsibilities, and a lack of role models in leadership also discourage sustained participation.
People with Disabilities encounter unique obstacles such as, inaccessible learning materials or platforms that don’t support assistive technologies, physical barriers in classrooms or training centers and limited employer readiness to accommodate diverse needs.
These challenges contribute to underrepresentation in tech roles and create invisible barriers that go beyond skills or interest.

![Inclusive tech](/image/blogs/events/inclusion3.jpg)

## The Role of Bootcamps in Driving Inclusion
With all the challenges and misconceptions affecting inclusivity and diversity in tech, what silver lining currently exists to bridges the gap? This is where emerging bootcamp styled education institutions aid in narrowing the gap. Bootcamps have been around in kenya for a while now and with consistent funding from donors they help increase awareness of tech courses and also offer financial incentives to improve accessibility of tech courses to everyone. Bootcamps like Moringa, Gomycode, Somakodi and many more in kenya,play a key role in advancing inclusion by reducing barriers that traditional education institutions often creates such as long study periods, high tuition costs, rigid schedules, and strict academic requirements exclude many capable learners. Bootcamps respond by offering practical, accessible, and outcome-focused learning pathways.

They support inclusion through:
1. Short, focused learning cycles that help learners gain job-ready skills faster, especially those who cannot afford years of full-time study.
2. Hands-on, project-based learning and mentorship, allowing learners to build confidence through real practice rather than theory alone.
3. Financial aid and flexible payment options, making tech education accessible to career switchers, women, and learners from low-income backgrounds.
4. Beyond skills, inclusive bootcamps build strong learning communities that encourage persistence, collaboration, and continuous growth. This approach empowers learners not just to start learning, but to progress confidently into Kenya’s growing tech ecosystem.

![Inclusive tech](/image/blogs/events/inclusion4.jpg)

## Final Thoughts
Inclusion and diversity are not optional ideals they are central to Kenya’s digital future. Real inclusion means ensuring that talent is recognized and supported regardless of background, gender, ability, or wealth. When learners can easily gain access to learning tools, supportive communities and goverment policies, meaningful mentorship, and pathways into employment, the entire ecosystem benefits.

Bootcamps are helping to bridge gaps that traditional systems cannot fix alone. But closing the divide requires coordinated action from government, private sector, civil society, and educators. Ultimately, the future of Kenya’s tech industry will be strongest when it reflects the full diversity of Kenya’s people, harnessing creativity, innovation, and opportunity for all.`,
},
{
  id: "project-based-learning",
  title: "Project Based Learning Works",
  category: "Learning",
  excerpt:
    "Project-based learning has become one of the most effective ways to build real-world tech skills. Instead of focusing only on theory, learners gain experience by solving practical problems, building real projects, and learning through doing. This approach mirrors how work actually happens in the tech industry and prepares learners for long-term success.",
  image: "/image/blogs/events/blogpic2.jpg",
  content: `
## Introduction
Most learning models place a strong emphasis on theory as the primary way to understand concepts, rely on memorization to retain those ideas, and use exams to measure how well learners can recall them. While this foundational knowledge is important, it often falls short when learners are required to apply what they’ve studied in practical, real-world situations. As a result, many students complete courses with good grades but limited confidence in their ability to actually perform tasks outside the classroom.

This gap becomes especially clear in technology-related careers, where success depends not just on knowing concepts, but on the ability to build solutions, troubleshoot problems, and adapt quickly to new tools and requirements. Employers increasingly look for candidates who can demonstrate hands-on experience and problem-solving skills, not just certificates. Without opportunities to practice and apply knowledge in realistic contexts, learners may find it difficult to transition from education into effective, job-ready performance.

## Project based learning
Project-based learning (PBL) addresses this gap by Project-Based Learning (PBL) is an approach where learners gain knowledge and skills by actively working on meaningful, real-world projects over time. Instead of focusing on lectures and exams, PBL centers learning around solving practical problems. Learners are introduced to a challenge first, then acquire the necessary concepts, tools, and techniques as they work toward a solution. This makes learning more engaging, relevant, and easier to retain because knowledge is applied immediately rather than memorized temporarily. Instead of only reading or watching tutorials, learners actively build projects that reflect real industry tasks. This method has proven to be one of the most effective ways to learn, retain knowledge, and build confidence.

![Project-based learning](/image/blogs/events/pbl1.jpg)

## Learning by Doing Builds Real Skills
One of the biggest strengths of project-based learning is that it mirrors how skills are used in the workplace. In tech, professionals learn constantly by building, testing, breaking, and improving systems. PBL introduces learners to this reality early. By working on real projects, learners develop practical skills such as writing clean code, debugging errors, managing files, collaborating with others, and meeting project requirements. These skills cannot be fully developed through theory alone. Learning by doing helps concepts stick and makes learners more comfortable tackling unfamiliar problems.

## Projects Turn Knowledge Into Confidence
Many beginners understand concepts in isolation but lack confidence in applying them. Projects bridge this gap. Completing a project from start to finish gives learners proof that they can build something functional and meaningful.
Each completed project builds momentum. Learners begin to trust their problem-solving abilities, approach challenges with curiosity instead of fear, and become more resilient when things don’t work the first time. This confidence is essential for long-term growth in tech.

![Project-based learning](/image/blogs/events/pbl2.jpg)

## Real Projects Create Strong Portfolios
In the tech industry, portfolios often matter more than certificates. Employers want to see what you can build, how you think, and how you solve problems. Project-based learning naturally produces this evidence.
Through projects, learners create tangible work they can showcase during interviews, on GitHub, or in personal websites. These projects demonstrate not just technical skills, but also creativity, attention to detail, and persistence. A strong portfolio helps learners stand out, especially those without formal degrees.

## PBL Supports Different Learning Styles
Not everyone learns best by reading or listening. Project-based learning supports diverse learning styles by combining visual, practical, and collaborative approaches.
Learners engage with concepts through experimentation, repetition, and reflection. Making mistakes becomes part of the learning process rather than something to avoid. This inclusive approach is especially helpful for beginners, career switchers, and learners who may have struggled in traditional academic environments.

![Project-based learning](/image/blogs/events/pbl3.jpg)

## Collaboration and Communication Skills
Most real-world tech work happens in teams. Project-based learning often involves pair programming, group projects, and peer feedback, helping learners develop essential soft skills alongside technical ones.
Through collaboration, learners practice explaining ideas, giving and receiving feedback, managing tasks, and working through disagreements. These skills are critical for professional success and are highly valued by employers.

## Preparing Learners for Continuous Learning
Technology changes constantly, and no course can teach everything. Project-based learning prepares learners for this reality by teaching them *how to learn*.
When learners work on projects, they practice researching documentation, asking questions, testing solutions, and adapting when requirements change. These habits build independence and make learners more adaptable as technologies evolve.

## Final Thoughts
Project-based learning works because it reflects how skills are actually developed and used in the real world. By focusing on practical projects, learners gain confidence, build portfolios, develop collaboration skills, and prepare for continuous growth.
For anyone looking to build a sustainable tech career, project-based learning is not just an effective method it is a necessary one. It turns learning into experience and transforms beginners into capable, confident practitioners.
`,
},
{
  id: "coding-for-kids",
  title: "Why Coding for Kids Matters",
  category: "Education",
  excerpt:
    "Coding for kids is more than teaching children how to use computers. It helps them develop problem-solving skills, creativity, and confidence at an early age. As technology continues to shape how we live and work, introducing children to coding prepares them for a future where digital skills are essential.",
  image: "/image/blogs/events/cfk.jpg",
  content: `
## Introduction
Children today are growing up in a digital world where technology influences almost every aspect of life. From education and communication to entertainment and future careers, digital skills are becoming as important as reading and writing. Coding for kids is about helping young learners understand how technology works, not just how to use it.

By learning to code early, children gain foundational skills that support logical thinking, creativity, and confidence. Coding is not about turning every child into a programmer, but about equipping them with the mindset needed to thrive in a technology-driven world.

![Coding for kids](/image/blogs/events/cfk1.jpg)

## Building Problem-Solving Skills Early, Encouraging Creativity and Imagination
Coding teaches children how to think step by step. When kids write code, they learn how to break down problems into smaller parts, test solutions, and fix mistakes. These problem-solving skills extend beyond computers and help children approach challenges in school and everyday life with confidence.
Learning to debug code also teaches persistence. Children learn that mistakes are part of the learning process and that trying again is how progress is made.

Coding is often seen as technical, but it is also highly creative. Through games, animations, and interactive stories, children use coding to bring their ideas to life. This blend of logic and creativity encourages imagination and helps children express themselves in new ways. When children build something of their own, they gain a sense of ownership and pride in their work. This boosts self-esteem and motivates them to keep learning.

![Creative coding](/image/blogs/events/cfk2.jpg)

## Developing Confidence and Digital Literacy and Future Careers
Coding helps children move from being passive users of technology to active creators. As they understand how apps and games work, they become more confident using digital tools and navigating online spaces safely and responsibly.
This digital literacy is increasingly important as children encounter technology both in and out of school. Early exposure helps them build healthy relationships with technology.
While not every child will become a software developer, coding introduces skills that are valuable across many careers. Logical thinking, collaboration, and adaptability are essential in fields such as engineering, design, data science, entrepreneurship, and beyond.
Early coding exposure also helps children discover interests they may want to explore further as they grow older, opening doors to future learning opportunities.

![Future skills](/image/blogs/events/cfk3.jpg)

## Coding Supports Inclusive Learning
Coding programs can be designed to be inclusive and accessible, helping children from different backgrounds gain equal exposure to technology. When introduced early, coding helps reduce fear and stereotypes around tech, especially for girls and children from underserved communities.
Inclusive coding environments encourage curiosity, teamwork, and confidence, ensuring more children feel welcome in technology-related spaces.

## Final Thoughts
Coding for kids is an investment in the future. It equips children with essential skills, nurtures creativity, and builds confidence from an early age. By introducing coding in a fun, supportive way, we help young learners develop the mindset needed to adapt and succeed in a rapidly changing digital world.
Whether children pursue tech careers or not, the skills gained through coding will continue to benefit them throughout their lives.
`,
},
{
  id: "innovateher-financial-aid-program",
  title: "InnovateHer: Empowering Women to Build Careers in Tech",
  category: "Programs",
  excerpt:
    "InnovateHer is Somakodi’s financial aid program designed to support women who want to transition into tech careers. By offering up to 70% scholarships, InnovateHer removes financial barriers and creates opportunities for women to gain in-demand tech skills, confidence, and long-term career growth.",
  image: "/image/blogs/events/her.jpg",
  content: `
## Introduction
Young women continue to be underrepresented in technology not because of a lack of ability or interest, but because of deeply rooted systemic barriers that restrict access to education, resources, and professional opportunities. From an early stage, many girls have limited exposure to technology-related subjects, role models, and career pathways, which can make tech feel inaccessible or unattainable long before career decisions are made. This early gap compounds over time, narrowing the pipeline of women entering technical fields.

Financial constraints further widen this divide. Quality tech education, reliable internet access, and learning devices often come at a high cost, placing them out of reach for many young women. For those who must prioritize household needs or support family members, investing in long-term training can feel risky or unrealistic, even when the desire to learn is strong. These financial pressures force many capable women to postpone or abandon potential tech careers altogether.

Caregiving responsibilities also play a significant role. Women are disproportionately expected to balance unpaid care work, including childcare and family responsibilities, leaving little time or flexibility for intensive learning programs or full-time study. Traditional training models, which often lack flexible schedules or supportive structures, unintentionally exclude women who must juggle multiple roles.

In addition, limited visibility of clear and attainable tech pathways makes it difficult for young women to see how learning translates into real opportunities. Without mentorship, guidance, or examples of women thriving in technology, many struggle to connect education with sustainable careers. Even when women do enter the field, workplace biases, lack of inclusive support systems, and fewer advancement opportunities can slow progression and reduce retention.

Together, these barriers create a cycle where talent is consistently overlooked or underutilized—not because it doesn’t exist, but because the systems surrounding education and employment fail to support it. Addressing underrepresentation in technology therefore requires more than encouraging interest; it demands intentional efforts to remove structural obstacles, expand access, and create environments where women can realistically learn, grow, and succeed.

![InnovateHer program](/image/blogs/events/her1.jpg)

## InnovateHer Financial Aid
Somakodi's InnovateHer Financial Aid program is intentionally designed to support women who are ready to start or transition into tech by reducing these barriers. Through financial assistance of up to a 70% scholarship, combined with structured, practical training and ongoing mentorship, InnovateHer creates an environment where women can build skills, confidence, and real-world experience needed to succeed in technology careers. 

Tech careers offer stability, flexibility, and access to global opportunities. However, for many young women, the cost of training remains a major barrier. InnovateHer recognizes that without targeted support, tech inclusion remains unequal.
By reducing financial pressure, the program allows women to focus on learning, building skills, and gaining confidence. This support is especially impactful for women from underserved communities, single mothers, career returners, and women seeking economic independence.

## What InnovateHer Offers
1 - InnovateHer goes beyond tuition support. The program is designed to create an environment where young women can thrive throughout their learning journey. Participants benefit from:

- Up to 70% scholarship support that significantly reduce the cost of tech training.
- Project-based learning which allows learners to build real-world skills and portfolios.
- Mentorship and guidance helping learners navigate challenges and stay motivated.
- A supportive learning community where young women learn alongside peers with shared goals and experiences.

![Women in tech](/image/blogs/events/her2.jpg)

2 - Supporting Career Transitions into Tech
Many young women join InnovateHer while balancing work, family, or other responsibilities. Somakodi’s flexible learning structure allows learners to progress at a sustainable pace without sacrificing their existing commitments.
The program supports beginners and career switchers by starting with strong foundations and gradually building toward more advanced skills. Learners gain both technical and professional skills needed to succeed in the tech industry.

3 - Long-Term Impact Beyond the Classroom
InnovateHer is not just about learning to code—it’s about creating lasting impact. Women who gain tech skills increase their employability, earning potential, and confidence. These benefits often extend beyond the individual, positively affecting families and communities. By empowering women to participate in tech, InnovateHer contributes to a more diverse, innovative, and inclusive tech ecosystem in Kenya.

![Community impact](/image/blogs/events/her3.jpg)

## Who Can Apply
InnovateHer is open to young women who:
- Are interested in starting or transitioning into a tech career.
- Face financial barriers that limit access to tech education.
- Are committed to learning, practicing, and growing in a supportive environment.

No prior technical background is required—just curiosity, commitment, and the willingness to learn.

## Final Thoughts
InnovateHer exists because talent should never be limited by financial circumstances. By offering up to **70% scholarships**, Somakodi is creating real opportunities for women to build sustainable careers in tech and when women are empowered with skills, mentorship, and access, the entire tech ecosystem benefits. InnovateHer is more than a financial aid program it is a pathway to confidence, opportunity, and long-term growth in technology.
`,
},
{
  id: "cybersecurity-careers",
  title: "Cybersecurity Careers in Kenya",
  category: "Careers",
  excerpt:
    "Kenya’s rapid digital transformation has made cybersecurity one of the most critical and in-demand career paths today. From attacks on government systems to rising online fraud and data breaches, the need for skilled cybersecurity professionals continues to grow. This article explores the current threat landscape and career paths.",
  image: "/image/blogs/events/cyber.jpg",
  content: `
## Introduction
Kenya is one of Africa’s most digitally connected economies. Government services, banking, education, healthcare, and businesses increasingly rely on digital platforms to serve millions of people. While this shift has improved efficiency and access, it has also expanded the country’s exposure to cyber threats.

Cybersecurity has therefore moved from being a “nice to have” to a national priority. As attacks grow in scale and sophistication, organizations urgently need skilled professionals to protect systems, data, and users. For learners, professionals, and career switchers, cybersecurity offers a meaningful and future-proof career path.

![Cybersecurity](/image/blogs/events/cyber1.jpg)

## Kenya’s Growing Cyber Threat Landscape
Kenya has experienced a sharp increase in cyber incidents over recent years. National cyber monitoring bodies regularly report millions to billions of attempted cyber attacks, targeting both public and private systems.A highly publicized incident occurred when multiple Government of Kenya websites were targeted and temporarily disrupted, including platforms linked to key ministries and state agencies. Although authorities later confirmed that no sensitive data was compromised, the attack exposed vulnerabilities in critical public infrastructure and highlighted how attractive government systems are to attackers.

Beyond government platforms, Kenyan businesses and individuals face:
- Online fraud and phishing targeting mobile money and banking users.
- Ransomware attacks which lock organizations out of systems until a ransom is paid.
- Data breaches that exposes personal, financial, and medical information.
- Social engineering attacks where attackers manipulate users rather than systems.
These threats cause financial losses, service disruptions, and erosion of public trust, making cybersecurity skills essential across all sectors.

## Why Cybersecurity Careers Matter in Kenya
Kenya’s digital transformation goals.

Cybersecurity careers matter not only because of the growing number of job opportunities, but because of their far-reaching impact on society and the economy. As countries continue to digitize essential services and systems, the need to protect digital environments becomes a matter of public trust, economic stability, and national resilience.

One of the most critical roles of cybersecurity professionals is protecting citizens’ data. With the expansion of digital identification systems, online government services, and electronic health records, vast amounts of sensitive personal information are now stored and shared online. Ensuring this data is secure is essential to preventing identity theft, fraud, and misuse that can harm individuals and communities.

Cybersecurity is also vital to securing national infrastructure. Government platforms, public utilities, financial systems, and essential services must remain reliable, accessible, and trustworthy. Cyber attacks on these systems can disrupt daily life, weaken public confidence, and pose serious national security risks, making strong cybersecurity practices a national priority.

For businesses, effective cybersecurity directly supports growth and sustainability. Organizations face significant financial losses, operational disruption, and reputational damage when their systems are compromised. Skilled cybersecurity professionals help businesses protect their assets, maintain customer trust, and operate confidently in an increasingly digital marketplace.

At the same time, the cybersecurity field faces a major skills gap. There is a global and regional shortage of trained professionals capable of defending digital systems, creating strong demand for new and emerging talent. This shortage presents a powerful opportunity for learners to enter a field where their skills are urgently needed and highly valued.

Overall, cybersecurity professionals play a crucial defensive role that directly supports Kenya’s digital transformation goals. By protecting data, infrastructure, and economic activity, they help create a secure digital environment where innovation, inclusion, and growth can thrive.

## Common Cybersecurity Career Paths
Cybersecurity is a broad field with multiple entry points. Some common roles in Kenya include:

1 - Cybersecurity Analyst: Monitors systems, detects threats, and responds to incidents.
2 - Network Security Engineer: Designs and secures organizational networks.
3 - Penetration Tester (Ethical Hacker): Tests systems by simulating real-world attacks to identify weaknesses.
4 - Incident Response Specialist: Leads response and recovery during security breaches.
5 - Digital Forensics Analyst: Investigates cyber incidents and collects evidence.
6 - Governance, Risk, and Compliance Officer: Ensures organizations meet legal and regulatory security requirements.

These roles vary in technical depth, making cybersecurity accessible to both technical and non-technical professionals.

![Security operations](/image/blogs/events/cyber2.jpg)

## Skills Needed for a Cybersecurity Career
A successful cybersecurity professional combines technical skills with strong thinking and communication abilities.Key skills include Understanding operating systems especially Windows and Linux, Knowledge of networks protocols and firewalls, Familiarity with common attack types and how to defend against them, Ability to analyze logs, alerts and unusual behavior, Strong problem-solving and critical thinking skills and also Ethical mindset and attention to detail. Cybersecurity is not about knowing everything it’s about learning how to investigate, adapt, and respond.

## How to Get Started in Cybersecurity
For beginners and career switchers in Kenya, following a structured learning path can make entry into cybersecurity more approachable and sustainable. The journey should start with building strong IT foundations, including basic networking, operating systems, and core computing concepts. This groundwork helps learners understand how systems work before learning how to secure them.

Once the basics are in place, learners can move on to cybersecurity fundamentals such as common threats, vulnerabilities, risk management, and security controls. Understanding why attacks happen and how defenses are designed provides essential context for more advanced skills. At this stage, theory becomes far more meaningful when paired with practical application.

Hands-on practice is critical. Working with labs that simulate real-world environments allows learners to apply what they have learned in realistic scenarios, such as identifying vulnerabilities, responding to incidents, and securing systems. These practical experiences build confidence and problem-solving ability, which are highly valued by employers.

As skills develop, working toward recognized certifications and credentials, such as CompTIA Security+, helps validate knowledge and signal readiness to the industry. Certifications provide structure to learning and improve credibility, especially for those transitioning from non-technical backgrounds.

Engaging with the wider cybersecurity community is also important. Participating in online forums, capture-the-flag challenges, and local tech meetups helps learners gain exposure, learn from others, and stay motivated. Finally, committing to continuous learning is essential, as cyber threats evolve constantly. Staying current through ongoing practice, research, and skill development is what transforms beginners into resilient, long-term cybersecurity professionals.

![Security operations](/image/blogs/events/cyber3.jpg)

## The Future of Cybersecurity in Kenya
As Kenya continues to digitize public services and expand its digital economy, cybersecurity demand will only increase. Investments in digital government, fintech, cloud services, and remote work all depend on secure systems.

Cybersecurity professionals will play a central role in shaping a safe digital future—protecting institutions, businesses, and everyday users. For learners, this means long-term career stability, global opportunities, and work that truly matters.

## Final Thoughts
Cybersecurity careers in Kenya sit at the intersection of technology, trust, and national development. With cyber threats becoming more frequent and sophisticated, skilled professionals are urgently needed to defend digital systems and protect users. Whether you are starting your career, switching fields, or upskilling, cybersecurity offers a challenging, impactful, and rewarding path. In a digital-first future, those who can secure systems will always be in demand.
`,
},
{
  id: "personal-online-safety",
  title: "Online Safety: How to Protect Yourself in a Digital World",
  category: "Digital Safety",
  excerpt:
    "As more of our daily lives move online, personal online safety has never been more important. From mobile banking and social media to remote work and online learning, understanding how to protect yourself from cyber threats is an essential life skill. This guide explains common risks and practical steps you can take to stay safe online.",
  image: "/image/blogs/events/personal.jpg",
  content: `
## Introduction
The internet has made life more convenient, connected, and productive. We shop online, communicate instantly, access government services, and manage our finances digitally. However, this convenience comes with risks. Cybercriminals increasingly target individuals through scams, fraud, identity theft, and social engineering attacks.

Personal online safety is not just a technical issue it is about awareness, habits, and informed decision-making. By understanding common threats and adopting safe practices, you can significantly reduce your risk online.

![Online safety](/image/blogs/events/personal1.jpg)

## Common Online Threats Facing Individuals
Many cyber attacks do not rely on advanced hacking but on tricking you into making mistakes. Some of the most common threats include:

1 - Phishing scams where attackers send fake emails, SMS text, or social media links to steal personal info.
2 - Online fraud especially involving mobile money, fake investment schemes, and impersonation.
3 - Malware which can infect devices through downloads, links, or unsafe websites.
4 - Identity theft where stolen personal details are used to commit fraud.
5 - Account takeovers often caused by weak or reused passwords.

Understanding these threats is the first step toward protecting yourself and your online data. What then can you do to ensure safety and security online. Adopt these safe online practises

## Best online practises to adopt
1- Strong Passwords and Account Protection
Passwords are the first line of defense for most online accounts, playing a critical role in protecting personal, professional, and financial information. When passwords are weak, short, or reused across multiple platforms, attackers can easily compromise several accounts at once, often with serious consequences. Strong password practices involve using long and unique passwords for each account, avoiding easily guessable personal information such as names or birthdates, and using reputable password managers to generate and store credentials securely. In addition, enabling two-factor authentication (2FA) adds an essential extra layer of security by requiring a second form of verification beyond the password. This significantly reduces the risk of unauthorized access, even if a password is exposed through a breach or phishing attack.

2 - Staying Safe on Social Media
Social media platforms are frequent targets for scams, impersonation, and other forms of online fraud, making it important to protect personal information carefully. Oversharing details about yourself can leave you vulnerable to identity theft or financial loss. To stay safe, regularly review and update your privacy settings, be cautious when accepting friend requests or connection invitations from people you don’t know, and avoid posting sensitive information such as phone numbers, locations, or financial details publicly. Additionally, stay alert for fake profiles that impersonate friends, companies, or public figures, and approach any message that feels urgent, emotional, or too good to be true with skepticism pause and verify before responding to ensure you don’t fall victim to a scam.

![Account security](/image/blogs/events/personal2.jpg)

3 - Safe Browsing and Device Security
Keeping your devices secure is a fundamental part of maintaining personal online safety, as these devices store sensitive information, provide access to accounts, and connect to the broader internet where threats are constantly evolving. To protect your computers, smartphones, and tablets, it is important to follow best practices such as keeping your operating system and applications up to date, installing software only from trusted sources, and using antivirus or security software whenever possible. Regular updates not only provide new features but also patch known vulnerabilities, reducing the risk of malware infections, ransomware attacks, and other cyber threats.

In addition, users should be cautious about the networks they connect to. Public Wi-Fi networks can expose your data to interception, so avoid performing sensitive tasks like online banking or shopping without protection. If you must use public Wi-Fi, a reliable VPN can encrypt your connection and safeguard your information. Strong device security also includes using strong, unique passwords, enabling device encryption, and activating features like biometric locks or PIN codes to prevent unauthorized access.

Finally, practicing good digital hygiene such as regularly backing up important data, being mindful of app permissions, and avoiding suspicious downloads or links further strengthens device security. By taking these steps, you not only protect your own information but also help prevent your devices from being exploited in wider cyberattacks. Secure devices form the foundation of a safer online experience, making vigilance and proactive management essential in today’s digital world.

4 - Protecting Yourself from Online Scams
Scammers often rely on creating a sense of urgency or fear to pressure victims into making hasty decisions. Common red flags include unexpected notifications about prizes or winnings, threats of account suspension, or urgent requests for immediate payment. To protect yourself, never share one-time passwords (OTPs), PINs, or other sensitive codes with anyone, even if the request appears legitimate. Always verify messages by contacting organizations directly through official channels, and be skeptical of unsolicited offers, requests for money, or too-good-to-be-true deals. Additionally, reporting suspicious messages or accounts helps protect not only yourself but also others who may be targeted. Staying aware, cautious, and deliberate in your responses is one of the most effective ways to defend against scams and maintain online security.

![Account security](/image/blogs/events/personal3.jpg)

5 - Teaching Online Safety to Children and Family
Online safety is a shared responsibility, and it is particularly important to support children, elderly family members, and less tech-savvy users who are often the most vulnerable to scammers, phishing attempts, and other online threats. Creating a culture of cybersecurity awareness within families and communities can go a long way in reducing risks and fostering responsible digital behavior. Simple steps include educating family members about common scams, such as fraudulent emails, fake prize notifications, or deceptive phone calls, and teaching them how to verify the authenticity of messages before responding. Encouraging open conversations about online experiences allows family members to share concerns, report suspicious activity, and seek guidance without fear of judgment.

Setting up parental controls, content filters, and other safety features can provide an additional layer of protection for younger users while helping them learn responsible internet habits. Similarly, guiding elderly or less experienced users on safe browsing practices, strong password usage, and recognizing phishing attempts empowers them to navigate digital spaces with confidence. Promoting responsible and respectful online behavior such as avoiding oversharing personal information, thinking critically about what is posted, and being courteous to others online—helps create a safer and more positive digital environment.

Beyond the household, fostering cybersecurity awareness can extend to schools, workplaces, and community groups, emphasizing that everyone plays a role in maintaining online safety. By taking these proactive measures, families and communities not only protect their loved ones from potential threats but also contribute to a broader culture of informed, vigilant, and responsible internet use. In an increasingly connected world, shared responsibility and ongoing education are essential for building resilience against evolving cyber risks.

Building a culture of digital awareness helps protect everyone.

## Final Thoughts
Personal online safety is an essential skill in today’s digital world. While no system is completely risk-free, informed users can dramatically reduce their exposure to threats through simple, consistent habits. By staying alert, protecting your accounts, and thinking critically before clicking or sharing, you take control of your digital life. Online safety is not about fear it is about empowerment, confidence, and smart decision-making in a connected world.
`,
},
{
  id: "ai-slop-and-social-media-user-impact",
  title: "AI Slop and Social Media: How It Affects You as a User",
  category: "Digital Wellbeing",
  excerpt:
    "AI-generated content is flooding social media feeds faster than ever. While some of it is entertaining or useful, much of it is low-quality 'AI slop' that is designed purely for engagement. This article focuses on how this trend directly affects you, your attention, emotions, decisions, and trust of what you see and read online.",
  image: "/image/blogs/events/slob.jpg",
  content: `
## Introduction
If social media feels more exhausting, confusing, or manipulative than it used to, you’re not imagining it. The rise of generative AI has made it easier than ever to flood platforms with vast amounts of content, much of which is automated or mass-produced. This has led to the proliferation of what some experts call AI slop low-effort, attention-grabbing posts designed to go viral rather than provide meaningful or accurate information. These posts often prioritize engagement metrics over substance, making it harder for users to discern quality content from noise.

This shift has a direct impact on how we think, feel, and interact online, often influencing us subtly and unconsciously. Users may experience information overload, increased distraction, or a sense of being manipulated, as our attention is constantly being pulled in multiple directions. Over time, AI-generated content can affect opinions, emotional well-being, and even our ability to focus on genuinely valuable information. Recognizing this trend and being mindful of how we consume and engage with social media is becoming increasingly important for maintaining mental clarity and digital resilience.

![AI and users](/image/blogs/events/slob1.jpg)

## What AI Slop Means for Your Attention
Your attention is the first thing AI slop targets. Endless streams of exaggerated images, sensational headlines, and recycled ideas are carefully optimized to keep you scrolling for as long as possible. The goal is not understanding or learning, but prolonged engagement.

Over time, this constant exposure can weaken your ability to focus on long-form or meaningful content. Your brain becomes trained to seek quick stimulation, making deep reading, studying, or thoughtful reflection feel harder than it used to. Instead of actively choosing what you consume, algorithms increasingly make those choices on your behalf.

## How AI Slop Affects Your Emotions
A significant amount of AI-generated content is engineered to trigger emotional reactions such as fear, outrage, envy, or unrealistic positivity. As a user, this emotional manipulation can quietly influence your mood throughout the day.

You may notice yourself feeling anxious or irritated after scrolling, comparing your life to polished AI-generated lifestyles, or feeling emotionally drained by constant crisis-driven or sensational content. When emotions are repeatedly activated without resolution, stress accumulates and emotional fatigue sets in.

![Emotional impact](/image/blogs/events/slob2.jpg)

## The Impact on What You Believe
AI slop increasingly blurs the line between what is real and what is fabricated. Images, quotes, and stories can appear authentic while being entirely misleading or false, making it difficult for users to distinguish fact from fiction. As this type of content becomes more widespread, the challenge of identifying trustworthy information grows, and users must navigate an environment where appearances can be deceiving.

For individuals, this trend often leads to growing distrust of online information, the accidental sharing of false or misleading content, and confusion about which sources are credible. When misinformation becomes normalized, critically evaluating content and making informed decisions requires significantly more effort, attention, and skepticism. Users are forced to develop stronger media literacy skills and adopt cautious consumption habits in order to protect themselves from manipulation and maintain a clear understanding of reality in a digital landscape saturated with AI-generated content.

## How AI Slop Shapes Your Decisions
AI slop does not only inform; it influences behavior. From misleading financial advice to questionable health tips, engagement driven content can push users toward decisions with real-world consequences. Repeated exposure can distort your understanding of success, wealth, relationships, or happiness. Over time, what you see frequently begins to feel normal or true, even when it is not grounded in reality. This subtle shaping of perception can influence choices without you being fully aware of it.

## Why Social Media Feels Less Human
As AI generated posts multiply, genuine human stories become harder to find. Conversations feel repetitive, comments seem automated, and originality becomes increasingly rare. The platform starts to feel less like a space for connection and more like a performance arena. This shift can leave users feeling disconnected despite being constantly online. Many people become less motivated to share authentically, sensing that real human expression is drowned out by optimized content. When efficiency replaces expression, social media loses its human core.

![Digital fatigue](/image/blogs/events/slob3.jpg)

## The Mental Health Cost of Constant Noise
Consuming large volumes of low-quality, repetitive content contributes significantly to digital fatigue. Many users report feeling drained, distracted, or overwhelmed after spending time on social media, even when their original intention was simply to relax or be entertained. The constant flow of attention-grabbing posts, notifications, and algorithmically amplified content can make it difficult to focus, process information, or feel mentally present.

Overexposure to AI mass-produced, low-effort content has been linked to increased anxiety, reduced self-esteem, and general dissatisfaction with social media use. The relentless pace and shallow nature of this content leave little room for reflection, meaningful engagement, or deep learning. While social media platforms operate continuously, the human mind requires pauses, silence, and opportunities for focused attention in order to maintain psychological and emotional well-being. Without these breaks, users are more likely to experience burnout, stress, and a diminished sense of control over their digital environments.

## Final Thoughts
You do not need to abandon social media entirely to protect yourself, adopting intentional habits can significantly reduce its negative impact. Curating your feed carefully, pausing before reacting or sharing content, and following creators who provide genuine insight and meaningful engagement can help restore balance and purpose to your online experience.

Taking regular breaks from scrolling and prioritizing offline activities such as learning, conversation, and reflection allows you to regain control over your digital environment. By approaching social media with awareness, you transform passive consumption into conscious choice, making each interaction more deliberate and less draining.

AI slop affects users in subtle yet powerful ways, influencing attention, emotions, beliefs, and overall well-being. While AI-generated content will continue to evolve and proliferate, awareness remains your strongest defense. In an online world filled with noise, prioritizing quality, authenticity, and mindfulness is no longer optional; it is essential for protecting your attention, mental health, and sense of reality. By cultivating these habits, you can navigate social media safely, intentionally, and in a way that supports your overall well-being.
`,
},
{
  id: "ruby-in-2026",
  title: "Should You Learn Ruby in 2026?",
  category: "Careers",
  excerpt:
    "Ruby may not be the trendiest language anymore, but in 2026 it remains a powerful and practical choice for specific learners and career paths. This article focuses on who benefits most from learning Ruby today and why it still makes sense in the right context.",
  image: "/image/blogs/events/ruby.jpg",
  content: `
## Introduction
Is Ruby worth learning in 2026? The real question isn’t about popularity, but relevance. While Ruby may no longer be the default language that everyone is encouraged to start with, it still powers thousands of real-world applications and continues to be valued for its simplicity, readability, and productivity. Its relevance today depends less on trends and more on your personal goals, background, and the type of work you want to pursue.

If your career plans align with Ruby’s strengths such as web development with Ruby on Rails, building startups quickly, or maintaining existing applications learning it in 2026 can still be a smart and practical decision. Ruby’s ecosystem, developer community, and mature libraries make it a dependable choice for certain domains, and its focus on developer happiness and clean code remains unmatched by many newer languages. Ultimately, the decision to learn Ruby should be guided by the projects you want to build and the problems you aim to solve, rather than its current popularity ranking.

![Digital fatigue](/image/blogs/events/ruby1.jpg)

## Ruby for Career Switchers
For professionals transitioning into tech from non-technical backgrounds, Ruby remains one of the most approachable options. Ruby on Rails provides strong conventions and a clear structure that guides learners through building real applications without excessive setup.

This structure allows career switchers to focus on understanding how web applications work as a whole rather than getting lost in configuration. Progress feels tangible early on, which is important for motivation when learning alongside work or family responsibilities.

## Ruby for Beginners Who Want Clarity
Ruby’s syntax is intentionally designed to be readable and expressive, making it especially beginner-friendly. This means learners spend less time deciphering complex symbols or convoluted syntax and more time focusing on understanding program logic and flow. Ruby code often reads almost like plain English, which reduces frustration during the early stages of learning and allows students to grasp core programming concepts more intuitively.

In 2026, Ruby continues to appeal to those who value clarity and understanding over sheer speed. It is particularly well-suited for learners who prefer building complete, functional applications rather than experimenting with isolated code snippets. By emphasizing full-project development, Ruby helps beginners see the tangible results of their learning, making the journey more engaging, rewarding, and aligned with real-world software development practices.

## Ruby for Web and SaaS Builders
If your goal is to build web applications, internal tools, or SaaS products, Ruby on Rails continues to be highly effective. Rails offers built-in solutions for authentication, databases, background jobs, and security, allowing developers to move from idea to product quickly.
For learners who want to ship working products rather than endlessly assemble tools, Ruby provides a mature and well-documented ecosystem that supports long-term growth.

![Digital fatigue](/image/blogs/events/ruby2.jpg)

## Ruby in the Job Market in 2026
While Ruby job postings may not be as visible as those for JavaScript or Python, many companies still rely heavily on Rails applications. These include established startups and mature tech firms with large, stable codebases that require ongoing development and maintenance.
In 2026, fewer new developers are choosing Ruby, which can actually work in your favor. Specializing in Ruby can mean less competition and more opportunities for developers willing to work with existing systems.

## Ruby and Developer Experience
One of Ruby’s strongest advantages is its focus on developer happiness. The language and its ecosystem prioritize clean code, sensible defaults, and productivity. For many real-world applications, maintainability and clarity matter more than raw performance.
If you care about writing code that is enjoyable to read and easy to maintain, Ruby remains a strong and satisfying choice.

![Digital fatigue](/image/blogs/events/ruby3.jpg)

## When Ruby May Not Be the Best Choice
Ruby may not be ideal if your primary interests lie in machine learning, data science, low-level systems programming, or cloud-native infrastructure and DevOps-heavy roles. In these areas, other languages tend to dominate tooling and job demand.
That said, Ruby can still play a supporting role, even if it is not the core technology in those fields.

## Final Thoughts
Learning Ruby in 2026 makes sense if you value clarity, productivity, and web-focused development. It is especially well-suited for career switchers, beginners who appreciate readable code, and builders focused on web applications and SaaS products.
Ruby may not offer the loudest hype or the largest volume of job listings, but for the right learner, it provides a stable, enjoyable, and practical path into professional software development.
`,
},
{
  id: "learning-to-code-while-employed",
  title: "How to Learn Coding While Employed Full-Time",
  category: "Careers",
  excerpt:
    "Learning to code doesn't requires quitting your job, returning to school, or having unlimited free time. In reality, a significant number of successful developers learned to code while working full-time. The difference is not the number of hours available, but how intentionally those hours are used.",
  image: "/image/blogs/events/emp.jpg",
  content: `
## Introduction
Learning to code for the employed doesn't requires quitting your job, returning to school, or having unlimited free time. In reality, a significant number of successful developers learned to code while working full-time. The difference is not the number of hours available, but how intentionally those hours are used.
If you are employed and thinking about learning to code, the priority should be sustainability rather than speed. A slow, steady approach is far more effective than short bursts of overwork.

## Step 1: Start With Clear, Realistic Goals
When you are working full-time, unclear goals often lead to frustration and burnout. Instead of setting a broad goal like learning to code, it is more effective to define a specific and achievable outcome within a realistic timeframe. Clear goals help you stay focused and allow you to measure progress even when time is limited. They also make learning feel purposeful rather than overwhelming.

## Step 2: Create a Consistent Learning Schedule
Learning to code does not require studying for hours every day. Consistency matters far more than intensity. Short, regular study sessions create momentum and make learning feel manageable alongside work responsibilities. Treating learning time like an appointment rather than a flexible option reduces decision fatigue and removes the pressure of trying to catch up after missed days.

![Emotional impact](/image/blogs/events/emp1.jpg)

## Step 3: Choose Practical, Project-Based Learning
For working professionals, theory-heavy learning can feel disconnected and exhausting after a long day. Project-based learning helps bridge this gap by turning abstract concepts into something tangible. By focusing on small, practical projects, you learn only what you need at each stage and apply new concepts immediately. Seeing something work keeps motivation high even when energy is low.

## Step 4: Manage Energy, Not Just Time
Time is only part of the challenge when learning after work. Mental energy is often limited, especially in the evenings. Paying attention to when you focus best can make learning far more effective. Short sessions, regular breaks, and accepting slower days without guilt help prevent burnout. Sustainable progress comes from respecting your limits rather than pushing through exhaustion.

## Step 5: Use Your Current Job as Practice
You do not need a tech role to gain practical coding experience. Many learners successfully apply coding skills within their existing jobs by solving small, real problems. Using coding to automate tasks, organize data, or build simple tools reinforces learning and makes your new skills immediately useful. This also helps you see coding as a practical tool rather than an abstract skill.

![Emotional impact](/image/blogs/events/emp2.jpg)

## Step 6: Track Progress and Build Visibility
When learning while employed, progress can feel slow unless it is made visible. Keeping a simple record of what you have learned helps maintain motivation and confidence. Tracking progress through notes, small projects, or a basic portfolio shows how far you have come, even when day-to-day improvements feel minor.

## Final Thoughts
One of the biggest mistakes working professionals make is trying to learn everything at once. Comparing yourself to full-time learners or expecting immediate career changes often leads to frustration and discouragement, making it harder to stay motivated.

Learning while employed is a long-term investment. Progress may be slower than in a full-time program, but it is often deeper and more sustainable when expectations are realistic. The key is consistency and deliberate practice over time, rather than speed or perfection.

Learning to code while working full-time is challenging, but it is also one of the most practical and effective paths into tech. With clear goals, regular effort, and patience, small daily actions compound into meaningful skill development. You don’t need perfect conditions to start; you need a plan that fits your life and the commitment to show up consistently. Even one focused hour at a time can gradually transform your knowledge, skills, and ultimately, your career trajectory.
`,
},
{
  id: "Why-Projects-Matter-in-Tech",
  title: "Why Projects Matter in Tech",
  category: "Careers",
  excerpt:
    "Certificates open doors, but projects prove you can walk through them. In today’s tech job market, knowing about technology is no longer enough. Employers want to see what you can build, what problems you can solve, and how you think when faced with real challenges.",
  image: "/image/blogs/events/pro.jpg",
  content: `
Projects Matter More Than Ever

In today’s tech job market especially within Kenya’s fast-growing digital economy, simply knowing about technology is no longer enough. Employers want to see clear, practical evidence of what you can build, the problems you can solve, and how you approach real-world challenges. Certificates and transcripts may open doors, but projects are what truly demonstrate competence. They show not just what you know, but how well you can apply that knowledge under realistic conditions.

This is why projects have become one of the most powerful tools for anyone trying to break into tech or grow within it. A well-built project tells a story about your skills, creativity, and problem-solving ability. It shows initiative, persistence, and the willingness to learn through trial and error, qualities employers value highly in fast-moving tech environments. Projects also help bridge the gap between learning and working, allowing you to gain experience even before landing your first role.

Beyond hiring, projects build confidence and clarity. As you work through real challenges, debugging errors, making design decisions or improving performance you begin to think like a professional rather than a student. Over time, a strong portfolio of projects becomes a living record of your growth, making it easier to communicate your value, stand out in a competitive market, and position yourself for meaningful opportunities in the tech ecosystem.


![Building real projects](/image/blogs/events/pro1.jpg)

Understanding What a Project Really Is
A project does not have to be a complex startup idea or a fully funded product. It can be something as simple as a personal website, a small mobile app that solves a daily inconvenience, a data dashboard built from public Kenyan datasets, or a simple automation script that saves time. What truly matters is that the project addresses a real problem and demonstrates your ability to apply what you are learning in a practical way.

Why Employers Value Projects More Than Certificates
Certificates show that you completed a course or followed a learning path, but projects show that you can actually do the work. When recruiters or hiring managers look at your portfolio, your projects answer critical questions without you having to say a word. They show whether you can apply your knowledge, whether you can complete tasks independently, and whether you understand your technical decisions well enough to explain them. In many cases, a strong, well-documented project can outweigh several certificates.

How Projects Build Confidence and Skill
Working on projects forces you to face real challenges. You encounter bugs, broken code, unclear requirements, and moments of frustration. Through this process, you learn how to research solutions, debug your own mistakes, and understand how systems truly work. This struggle is not a sign of failure. It is the exact process through which confidence and competence are built, and it is something tutorials alone cannot provide.

![Coding and problem solving](/image/blogs/events/emp3.jpg)

Getting Started with Building Projects
The best way to start is to begin small and remain consistent. Choose one skill you are currently learning and look for a simple problem around you that could benefit from a technical solution. Build a basic version, then improve it gradually as your skills grow. Sharing your work online through platforms like GitHub, LinkedIn, or even blog posts helps you learn in public, receive feedback, and attract mentorship and opportunities.

Final Thoughts

In tech, your projects tell your story far more clearly than your CV ever could. They show where you began, how you approach problems, and how much you have grown over time. If you are serious about building a career in tech, do not wait until you feel fully ready. Start building now, because every project you create brings you one step closer to the future you want.
`,
},
{
  id: "The-Future-of-Tech-Jobs-in-Kenya",
  title: "The Future of Tech Jobs in Kenya",
  category: "Careers",
  excerpt:
    "Kenya’s tech ecosystem is growing at an unprecedented pace, driven by expanding internet access, widespread mobile innovation, a vibrant startup culture, and increasing global demand for digital skills for what was once a niche sector.",
  image: "/image/blogs/events/fut.jpg",
  content: `
The Future of Tech Jobs in Kenya
Kenya’s tech ecosystem is growing at an unprecedented pace, driven by expanding internet access, widespread mobile innovation, a vibrant startup culture, and increasing global demand for digital skills. What was once a niche sector has become a major driver of economic growth and employment, influencing industries ranging from finance and agriculture to education and healthcare. Technology is no longer just supporting traditional sectors it is actively redefining how services are delivered and how businesses scale.

From Nairobi’s Silicon Savannah to remote work opportunities accessible from towns and rural areas across the country, tech is reshaping how young people work, learn, and build careers. Geographic location is becoming less of a barrier, as digital tools allow Kenyan talent to compete and collaborate on a global stage. This shift is opening doors for individuals who may not have had access to traditional employment pathways.

For many Kenyans, especially young people and career switchers, technology is no longer a distant dream reserved for a select few. It has become a realistic and achievable path to economic independence, professional growth, and global relevance. As demand for tech skills continues to rise, those who invest in learning and building practical digital skills today are positioning themselves at the forefront of Kenya’s future workforce.

![Learning tech](/image/blogs/events/fut1.jpg)

Emerging Career Paths in Tech
As technology continues to evolve, so do the types of jobs available. Software engineering remains in high demand, but it is no longer the only viable path. Data science is helping organizations make smarter decisions, cybersecurity professionals are becoming critical as digital threats increase, and designers are shaping how users interact with technology. These diverse paths allow learners to choose careers that align with both their strengths and interests.

Why Practical Skills Will Matter More Than Ever
The future of tech jobs in Kenya will increasingly favor individuals who can demonstrate real-world, practical skills. Employers are shifting their focus away from purely academic credentials and placing greater value on what candidates can actually do. In a fast-changing digital environment, the ability to apply knowledge, solve problems, and deliver working solutions is far more valuable than simply holding certificates or degrees.

Hands-on experience has become a key differentiator in the hiring process. Candidates who can show projects they have built, systems they have tested, or problems they have solved are better positioned to stand out in a competitive job market. Practical skills signal readiness to contribute from day one, reducing training time and risk for employers.

Adaptability is equally critical. Technology evolves rapidly, and professionals who can learn new tools, troubleshoot unfamiliar challenges, and continuously improve their work are more likely to thrive. Those who can build, test, iterate, and refine solutions in real-world contexts will not only secure opportunities but also grow sustainably within Kenya’s expanding tech ecosystem.

![Project work](/image/blogs/events/fut2.jpg)

The Role of Community and Mentorship
No one builds a successful tech career alone. Communities, meetups, online forums, and mentorship programs play a critical role in personal and professional growth by providing support, accountability, and access to shared knowledge. These spaces allow learners and professionals to ask questions, learn from others’ experiences, and stay informed about industry trends and emerging technologies.

Learning in public by sharing progress, challenges, and projects—further accelerates growth. It encourages consistency, invites feedback, and helps individuals build visibility within the tech ecosystem. Over time, these interactions lead to meaningful professional relationships, mentorship opportunities, and career connections, making community engagement a powerful catalyst for long-term success in tech.

Final Thoughts

The future of tech jobs in Kenya is full of promise, but it belongs to those who are willing to learn continuously, adapt to change, and take initiative. Tech is not reserved for a select few. It is for anyone ready to invest time, effort, and curiosity into building skills that solve real problems. The journey may not be easy, but the opportunities ahead make it worth taking the first step today.
`,
},
{
  id: "the-power-of-react",
  title: "The-power-of-React",
  category: "Careers",
  excerpt:
    "Modern web development has evolved rapidly, and React has become one of the most influential tools shaping how applications are built today. From startups to global companies, React is trusted for creating fast, scalable, and user-friendly interfaces. For anyone looking to build a strong foundation in frontend development, understanding React is no longer optional—it is a strategic advantage.",
  image: "/image/blogs/events/react.jpg",
  content: `
The Power of React

Modern web development has evolved at a rapid pace, and React has emerged as one of the most influential tools shaping how applications are built today. Designed to make user interfaces more efficient and interactive, React enables developers to create dynamic web experiences that feel fast, responsive, and intuitive. Its component-based architecture encourages clean, reusable code, making it easier to build and maintain complex applications as they grow.

From early-stage startups to global technology companies, React is widely trusted for its scalability and performance. It powers dashboards, e-commerce platforms, social applications, and enterprise systems where speed and reliability are critical. Because of its large ecosystem and strong community support, developers can move faster, solve problems more effectively, and adapt to changing product needs with confidence.

For anyone looking to build a strong foundation in frontend development, understanding React is no longer optional—it is a strategic advantage. Learning React not only opens doors to more job opportunities, but also equips developers with modern thinking around state management, component design, and user experience. In today’s competitive tech landscape, React skills signal readiness to build real-world applications that meet modern standards.

![Learning React](/image/blogs/events/react1.jpg)

Why React Changed Web Development
React introduced a component-based approach that allows developers to break complex interfaces into smaller, reusable pieces. This makes applications easier to build, maintain, and scale over time. Instead of rewriting large sections of code, developers can update individual components, improving efficiency and reducing errors. This approach has fundamentally changed how teams think about building user interfaces.

React focuses on writing clean, declarative code that describes what the UI should look like at any given time. This makes applications more predictable and easier to debug. With features like hooks and a strong ecosystem of libraries, React empowers developers to manage state, handle side effects, and build complex functionality without unnecessary complexity.

The Importance of Building Real Projects with React
Learning React truly comes to life when applied to real projects. Building dashboards, landing pages, e-commerce interfaces, or simple web apps helps developers understand how components interact and how data flows through an application. These projects not only strengthen technical skills but also serve as tangible proof of ability for employers and clients.

Community, Ecosystem, and Career Growth
One of React’s greatest strengths is its global community. From open-source libraries to tutorials, forums, and meetups, React learners are never alone. This strong ecosystem makes it easier to find solutions, learn best practices, and stay up to date with industry trends. For many developers, React becomes a gateway to broader opportunities in frontend engineering and full-stack development.

![Learning React](/image/blogs/events/react2.jpg)

Final Thoughts
React is more than just a JavaScript library, it is a mindset for building modern web applications. By learning React and consistently building projects, developers position themselves for long-term growth in an increasingly competitive tech landscape. Whether you are just starting out or looking to level up, investing time in React is an investment in your future.
`,
},
{
  id: "applied-ai-and-fullstack-development",
  title: "Applied AI & Full-Stack Development: Building Real-World Intelligent Applications",
  category: "Careers",
  excerpt:
    "Applied AI combined with full-stack development is shaping how modern digital products are built. This guide explains what Applied AI & Full-Stack Development really means, who it is for, and how learners can build practical, job-ready skills by focusing on real-world applications rather than theory alone.",
  image: "/image/blogs/events/aifullstack.jpg",
  content: `
## Introduction
Applied AI and Full-Stack Development represent a practical shift in how software is built today. Instead of treating artificial intelligence as a purely academic or research-focused discipline, applied AI focuses on using existing models, APIs, and tools to solve real business and user problems within complete applications.
When combined with full-stack development, this approach allows developers to build intelligent products end to end, from user interfaces and databases to AI-powered features that enhance decision-making and automation.

## What Applied AI Really Means
Applied AI is not about building machine learning models from scratch or becoming a research scientist. It is about understanding how to integrate AI capabilities into software products in a practical and responsible way. This includes using APIs for natural language processing, computer vision, recommendation systems, and automation while understanding their limitations, costs, and ethical implications. The focus is on solving problems, not inventing algorithms.

## The Role of Full-Stack Development
Full-stack development provides the foundation that makes applied AI useful. Without frontend interfaces, backend logic, databases, and APIs, AI models have no real-world impact. Full-stack skills allow developers to connect AI services to real users, manage data flows, handle authentication, deploy applications, and maintain systems over time. This combination turns AI from a feature into a product.

![Learning React](/image/blogs/events/ai2.jpg)

## Why Applied AI and Full-Stack Skills Are in Demand
Companies are not just looking for AI experts or frontend developers in isolation. They need professionals who can build complete systems that include intelligence as part of the workflow.
In many organizations, the most valuable developers are those who can take a business problem, design a solution, build the application, and integrate AI features that improve efficiency or user experience. This makes applied AI full-stack developers highly versatile and employable.

## Who Should Learn Applied AI & Full-Stack Development
This path is well-suited for learners who want to build practical products rather than focus purely on theory. It is especially valuable for software developers looking to upgrade their skills, career switchers who want future-proof roles, and builders interested in startups, SaaS products, or internal business tools.
It also fits learners who enjoy seeing tangible results and prefer shipping working applications over experimenting with isolated code or models.

## What You Learn in an Applied AI Full-Stack Path
Learning applied AI alongside full-stack development typically involves mastering frontend technologies, backend frameworks, databases, and cloud deployment, while also learning how to integrate AI tools responsibly. Instead of memorizing algorithms, learners focus on building chatbots, intelligent dashboards, automation tools, content systems, and data-driven applications that reflect real industry use cases.

![Learning React](/image/blogs/events/ai3.jpg)

## Practical Projects Over Theory
Applied AI full-stack learning is most effective when driven by projects. Building real applications helps learners understand trade-offs, performance limitations, user experience challenges, and ethical considerations. Projects such as AI-powered customer support tools, recommendation systems, content analysis platforms, or workflow automation systems provide hands-on experience that directly translates to the workplace.

## Career Opportunities and Growth
Professionals with applied AI and full-stack skills can work in a wide range of roles, including software engineering, product development, technical consulting, and startup environments. These skills are especially valuable in companies adopting AI but lacking teams that can integrate it effectively.
As AI tools continue to evolve, developers who understand both software systems and intelligent features will remain relevant and adaptable.

## Final Thoughts
Applied AI and Full-Stack Development are about building useful, intelligent software that solves real problems. This path prioritizes practicality, adaptability, and real-world impact over hype or deep academic specialization. For learners who want to stay relevant in a rapidly changing tech landscape, combining applied AI with full-stack development offers a powerful and future-ready skill set that bridges innovation and execution.
`,
},
];

/* ----------------------------------
   UTILITIES
----------------------------------- */
const estimateReadTime = (text: string) =>
  Math.max(1, Math.round(text.split(" ").length / 200));

function markdownToHtml(md: string) {
  return md
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/!\[(.*?)\]\((.*?)\)/gim, `<img src="$2" alt="$1" />`)
    .replace(/\n/g, "<br />");
}

/* ----------------------------------
   FULL SCREEN READER
----------------------------------- */
function BlogReader({
  post,
  onClose,
}: {
  post: BlogPost;
  onClose: () => void;
}) {
  const articleRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* Reading progress */
  useEffect(() => {
    const onScroll = () => {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const total = el.scrollHeight - el.clientHeight;
      setProgress((el.scrollTop / total) * 100);
    };

    articleRef.current?.addEventListener("scroll", onScroll);
    return () =>
      articleRef.current?.removeEventListener("scroll", onScroll);
  }, []);

  /* Table of contents */
  const toc = useMemo(() => {
    return post.content
      .match(/^## (.*$)/gim)
      ?.map((h) => h.replace("## ", ""));
  }, [post.content]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-orange-500 z-50"
        style={{ width: `${progress}%` }}
      />

      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-40 flex items-center justify-between px-4 py-3">
        <Typography variant="h6" className="truncate">
          {post.title}
        </Typography>
        <Button variant="text" onClick={onClose}>
          <XMarkIcon className="h-6 w-6" />
        </Button>
      </div>

      {/* Content */}
      <div
        ref={articleRef}
        className="h-[calc(100vh-56px)] overflow-y-auto"
      >
        <div className="relative h-72">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <article className="max-w-3xl mx-auto px-4 py-10 prose prose-orange">
          <Typography variant="h2">{post.title}</Typography>

          <div className="flex gap-4 items-center my-4">
            <Chip value={post.category} />
            <Typography className="text-sm text-gray-500">
              {estimateReadTime(post.content)} min read
            </Typography>
          </div>

          {/* TOC */}
          {toc && (
            <div className="border rounded-lg p-4 bg-gray-50 mb-8">
              <Typography variant="h6">On this page</Typography>
              <ul className="list-disc pl-5">
                {toc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            dangerouslySetInnerHTML={{
              __html: markdownToHtml(post.content),
            }}
          />
        </article>
      </div>
    </motion.div>
  );
}

/* ----------------------------------
   PAGE
----------------------------------- */
export default function BlogPage() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh]">
        <Image
          src="/image/blogs/events/hero.jpg"
          alt="Somakodi Blog"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center px-6">
          <div className="max-w-3xl text-white">
            <Typography variant="h1" className="mb-4">
              The Somakodi Blog
            </Typography>
            <Typography className="text-lg opacity-90">
              Tech insights, career guidance, and real stories.
            </Typography>
          </div>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOGS.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -4 }}
              onClick={() => setActivePost(post)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden border rounded-xl">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardBody>
                  <Chip value={post.category} className="mb-2" />
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography className="text-gray-600">
                    {post.excerpt}
                  </Typography>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FULL SCREEN READER */}
      <AnimatePresence>
        {activePost && (
          <BlogReader
            post={activePost}
            onClose={() => setActivePost(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
