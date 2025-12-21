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
    id: "Online-Learning-vs-Physical-Classes",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
    id: "AI-Slop-and-Social-Media",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
  id: "personal-online-safety",
  title: "Personal Online Safety: How to Protect Yourself in a Digital World",
  category: "Digital Safety",
  excerpt:
    "As more of our daily lives move online, personal online safety has never been more important. From mobile banking and social media to remote work and online learning, understanding how to protect yourself from cyber threats is an essential life skill. This guide explains common risks and practical steps you can take to stay safe online.",
  image: "/image/blogs/events/blogpic1.jpg",
  content: `
## Introduction
The internet has made life more convenient, connected, and productive. We shop online, communicate instantly, access government services, and manage our finances digitally. However, this convenience comes with risks. Cybercriminals increasingly target individuals through scams, fraud, identity theft, and social engineering attacks.

Personal online safety is not just a technical issue—it is about awareness, habits, and informed decision-making. By understanding common threats and adopting safe practices, anyone can significantly reduce their risk online.

![Online safety](/image/blogs/events/blogpic1.jpg)

## Common Online Threats Facing Individuals
Many cyber attacks do not rely on advanced hacking but on tricking users into making mistakes. Some of the most common threats include:

- **Phishing scams**, where attackers send fake emails, SMS messages, or social media links to steal personal information.
- **Online fraud**, especially involving mobile money, fake investment schemes, and impersonation.
- **Malware**, which can infect devices through downloads, links, or unsafe websites.
- **Identity theft**, where stolen personal details are used to commit fraud.
- **Account takeovers**, often caused by weak or reused passwords.

Understanding these threats is the first step toward protecting yourself.

## Strong Passwords and Account Protection
Passwords are the first line of defense for most online accounts. Weak or reused passwords make it easy for attackers to access multiple accounts at once.

Good password practices include:
- Using long, unique passwords for each account.
- Avoiding personal information such as names or birthdates.
- Using a password manager to store passwords securely.
- Enabling **two-factor authentication (2FA)** whenever possible.

2FA adds an extra layer of security, making it much harder for attackers to gain access even if a password is compromised.

![Account security](/image/blogs/events/blogpic2.jpg)

## Staying Safe on Social Media
Social media platforms are common targets for scams and impersonation. Oversharing personal information can make you vulnerable to fraud and identity theft.

To stay safe:
- Review privacy settings regularly.
- Be cautious about accepting friend requests from unknown people.
- Avoid sharing sensitive details such as phone numbers, locations, or financial information publicly.
- Be alert to fake profiles impersonating friends, companies, or public figures.

If a message feels urgent, emotional, or too good to be true, pause and verify before responding.

## Safe Browsing and Device Security
Keeping your devices secure is essential for personal online safety.

Best practices include:
- Keeping your operating system and apps up to date.
- Installing software only from trusted sources.
- Using antivirus or security software where possible.
- Avoiding public Wi-Fi for sensitive activities like banking, or using a VPN if necessary.

Regular updates patch known vulnerabilities and reduce the risk of malware infections.

## Protecting Yourself from Online Scams
Scammers often rely on urgency and fear to pressure victims into acting quickly. Common red flags include unexpected prize notifications, threats of account suspension, or requests for immediate payment.

To protect yourself:
- Never share one-time passwords (OTPs) or PINs.
- Verify messages by contacting organizations through official channels.
- Be skeptical of unsolicited offers or requests for money.
- Report suspicious messages or accounts when possible.

Awareness and caution are powerful tools against scams.

## Teaching Online Safety to Children and Family
Online safety is a shared responsibility. Children, elderly family members, and less tech-savvy users are often targeted by scammers.

Simple steps include:
- Educating family members about common scams.
- Encouraging open conversations about online experiences.
- Setting parental controls where appropriate.
- Promoting responsible and respectful online behavior.

Building a culture of digital awareness helps protect everyone.

## Final Thoughts
Personal online safety is an essential skill in today’s digital world. While no system is completely risk-free, informed users can dramatically reduce their exposure to threats through simple, consistent habits.

By staying alert, protecting your accounts, and thinking critically before clicking or sharing, you take control of your digital life. Online safety is not about fear—it is about empowerment, confidence, and smart decision-making in a connected world.
`,
},
{
    id: "History-of-Ruby",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
    id: "Coding-Bootcamps",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
    id: "Tech-Careers-After-a-Coding-Bootcamp",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
    id: "Is-a-Coding-Bootcamp-Worth-it-in-Kenya",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
    id: "Beginner-to-Developer-The-First-90-Days",
    title: "How to Start a Tech Career in Kenya",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
`,
  },
  {
  id: "ai-slop-and-social-media-user-impact",
  title: "AI Slop and Social Media: How It Affects You as a User",
  category: "Digital Wellbeing",
  excerpt:
    "AI-generated content is flooding social media feeds faster than ever. While some of it is entertaining or useful, much of it is low-quality 'AI slop' designed purely for engagement. This article focuses on how this trend directly affects you—your attention, emotions, decisions, and trust online.",
  image: "/image/blogs/events/blogpic2.jpg",
  content: `
## Introduction
If social media feels more exhausting, confusing, or manipulative than it used to, you’re not imagining it. The rise of generative AI has made it easier than ever to flood platforms with content. As a result, users are increasingly exposed to **AI slop**—low-effort, mass-produced posts designed to capture attention rather than provide real value.

This shift directly affects how you think, feel, and interact online.

![AI and users](/image/blogs/events/blogpic2.jpg)

## What AI Slop Means for Your Attention
Your attention is the first thing AI slop targets. Endless streams of exaggerated images, sensational headlines, and recycled ideas are optimized to keep you scrolling.

Over time, this can:
- Reduce your ability to focus on long-form or meaningful content.
- Train your brain to seek constant stimulation.
- Make learning or reading feel harder than it used to.

Instead of choosing what you consume, algorithms increasingly choose for you.

## How AI Slop Affects Your Emotions
Much AI-generated content is designed to trigger emotional reactions—fear, outrage, unrealistic positivity, or envy. As a user, this emotional manipulation can quietly shape your mood.

Common effects include:
- Feeling anxious or angry after scrolling.
- Comparing yourself to unrealistic AI-generated lifestyles or bodies.
- Emotional fatigue from constant “breaking news” or crisis content.

When emotions are repeatedly triggered without resolution, stress builds up.

![Emotional impact](/image/blogs/events/blogpic1.jpg)

## The Impact on What You Believe
AI slop blurs the line between real and fake. Images, quotes, and stories may look convincing but be entirely fabricated or misleading.

For users, this leads to:
- Difficulty trusting information online.
- Sharing false content without realizing it.
- Confusion about what sources are credible.

When misinformation becomes normal, making informed decisions becomes harder.

## How AI Slop Shapes Your Decisions
From fake financial advice to misleading health tips, AI slop doesn’t just inform—it influences behavior.

Users may:
- Follow bad advice that has real-world consequences.
- Develop distorted views of success, wealth, or happiness.
- Make decisions based on engagement-driven narratives rather than facts.

What you see repeatedly can subtly shape what you believe is “normal” or “true.”

## Why Social Media Feels Less Human
As AI-generated posts multiply, genuine human stories become harder to find. Conversations feel repetitive, comments feel automated, and originality becomes rare.

This can make users feel:
- Disconnected despite being constantly online.
- Less motivated to share authentically.
- Like social media is performative rather than social.

Human connection gets diluted when content is optimized instead of expressed.

![Digital fatigue](/image/blogs/events/myths.jpg)

## The Mental Health Cost of Constant Noise
Consuming large amounts of low-quality content contributes to digital fatigue. Many users report feeling drained, distracted, or overwhelmed after spending time online.

Overexposure to AI slop can:
- Increase anxiety and burnout.
- Lower self-esteem.
- Reduce overall satisfaction with social media.

The platform is always on, but your mind needs rest.

## What You Can Do as a User
You don’t have to quit social media to protect yourself. Small actions make a big difference:

- Curate your feed intentionally.
- Pause before reacting or sharing.
- Follow creators who add real insight or experience.
- Take regular breaks from scrolling.
- Prioritize offline learning and connection.

Being intentional helps you regain control of your digital space.

## Final Thoughts
AI slop affects users in subtle but powerful ways—shaping attention, emotions, beliefs, and well-being. While AI tools will continue to evolve, your awareness is your strongest defense.

In a world full of noise, choosing quality, authenticity, and mindfulness online is no longer optional—it’s essential.
`,
},
{
    id: "cybersecurity-news-kenya",
    title: "Wesite design new technologies",
    category: "Careers",
    excerpt:
      "Breaking into tech can feel overwhelming. This guide walks you through skills, mindset, and practical steps.",
    image: "/image/blogs/events/blogpic1.jpg",
    content: `
## Introduction
Kenya’s tech ecosystem is growing rapidly, creating opportunities for young people across the country.

![Learning tech](/image/blogs/events/blogpic2.jpg)

## Step 1: Choose Your Path
Software engineering, data science, cybersecurity, or design.

## Step 2: Build Real Projects
Employers want proof. Projects show your skills better than certificates.

![Project work](/images/blog/projects.jpg)

## Step 3: Community & Mentorship
Join communities, attend meetups, and learn in public.

## Final Thoughts
Tech is not just for a few — it’s for anyone willing to learn.
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
