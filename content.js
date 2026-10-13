/*
  ============================================================
  YOUR CONTENT: this is the only file you need to edit.
  Change the text between the quotes, save, and refresh the page.

  - To ADD an item: copy one { ... }, block inside a list and paste it below.
  - To REMOVE an item: delete its whole { ... }, block.
  - To REORDER: move the blocks up or down.
  - Keep the quotes " " and the commas, and don't use a double quote inside a text.
  - Links must start with https:// (or mailto: for email). Leave "" if there is no link yet.
  - Photo: put the file in the same folder and write its name, for example "photo.jpg".
    Leave "" to show the placeholder.
  - Certificates: put each PDF (or image) in the "certificates" folder and write its path in
    file, for example "certificates/security-plus.pdf". Leave "" if you have no file yet.
  ============================================================
*/
window.CONTENT = {
  profile: {
    name: "AHMADI Abolfazle",
    role: "Cybersecurity student, LGK",
    headline: "I learn how systems break, so I can help protect them.",
    intro:
      "Hi, I'm Abolfazle, a cybersecurity student building skills in defence, ethical hacking, and secure thinking.",
    bio: [
      "I'm a cybersecurity student who learns best by seeing things work. I like to ask four questions about every topic: what is it, how does it work, where is it used, and how can I use it?",
      "I enjoy practising in safe lab environments, breaking things on purpose, and then explaining the lesson in simple words.",
    ],
    status: "Open to internships",
    location: "Luxembourg",
    photo: "img/PersonalImg.jpeg",
  },

  skills: [
    {
      title: "Networking basics",
      what: "The rules and hardware that let devices talk to each other (IP, DNS, TCP, firewalls).",
      why: "Most attacks travel over a network. If you can't read normal traffic, you can't spot strange traffic.",
      real: "A company firewall blocking an unknown computer from reaching its payroll server.",
      use: "Capturing packets with Wireshark in my home lab.",
    },
    {
      title: "Ethical hacking and pentesting",
      what: "Testing a system, with permission, using the same tricks real attackers use.",
      why: "It's cheaper to find a hole yourself than to learn about it from a breach.",
      real: "A bank hires testers to try to get into its app before customers are affected.",
      use: "Practising on legal platforms like TryHackMe and Hack The Box.",
    },
    {
      title: "Cryptography",
      what: "Turning readable data into scrambled data that only the right key can unlock.",
      why: "It protects privacy, passwords, and trust online.",
      real: "The padlock in your browser, and messages in WhatsApp or Signal.",
      use: "Building small cipher tools (like the one at the top of this page).",
    },
    {
      title: "Linux and scripting",
      what: "Working in a terminal with Linux, plus small Python or Bash scripts to automate tasks.",
      why: "Most servers and security tools run on Linux, and automation saves hours.",
      real: "A script that scans log files and flags repeated failed logins.",
      use: "Daily practice on Kali Linux and Ubuntu virtual machines.",
    },
    {
      title: "Web security",
      what: "Understanding flaws like SQL injection and XSS that let attackers abuse websites.",
      why: "Websites hold customer data, so one weak form can expose thousands of people.",
      real: "A login box that doesn't check input can let someone walk in without a password.",
      use: "Studying the OWASP Top 10 with practice apps like DVWA.",
    },
  ],

  projects: [
    {
      title: "Home security lab",
      text: "A virtual network with Kali Linux, a vulnerable target machine, and a monitoring tool, used to practise attacks and detect them.",
      tags: ["VirtualBox", "Kali", "Wireshark"],
      link: "",
    },
    {
      title: "Password strength checker",
      text: "A small web tool that shows how long a password would take to crack, to teach people why long passphrases win.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "",
    },
    {
      title: "Log analyser script",
      text: "A Python script that reads server logs and highlights suspicious login attempts.",
      tags: ["Python", "Logs", "Automation"],
      link: "",
    },
    {
      title: "Phishing awareness guide",
      text: "A simple visual guide that teaches friends and family how to spot fake emails and links, with real examples.",
      tags: ["Awareness", "Design", "Writing"],
      link: "",
    },
    // working with AD
  ],

  // status: "done" or "progress"
  // file:     the certificate itself, a PDF or an image (e.g. "certificates/security-plus.pdf")
  // image:    OPTIONAL small preview picture for the card (e.g. "certificates/security-plus.png").
  //           Leave "" for PDFs and the card will show a PDF badge instead.
  // link:     OPTIONAL online verification page (https://...)
  // download: true shows a Download button in the viewer (needs a file). Default: false.
  certificates: [
    {
      title: "Cyber Security 101",
      issuer: "TryHackMe",
      year: "",
      status: "progress",
      file: "",
      image: "",
      link: "",
      download: false,
    },
    {
      title: "Pre Security",
      issuer: "TryHackMe",
      year: "2025",
      status: "done",
      file: "Certificates/THM-PreSecurity.pdf",
      image: "",
      link: "",
      download: false,
    },
    /*
    {
      title: "Your course or badge",
      issuer: "Issuer",
      year: "2025",
      status: "done",
      file: "",
      image: "",
      link: "",
      download: false,
    },*/
  ],

  journey: [
    {
      when: "2021",
      title: "Started my information technician diploma",
      text: "Began with networks, operating systems, databases and programming in ",
      link: { href: "https://lpem.lu/", label: "LPEM" },
    },
    {
      when: "2025",
      title: "BTS Cybersecurity degree",
      text: "Studying core security concepts with practical labs in ",
      link: { href: "https://www.lgk.lu/", label: "LGK" },
    },
    /* {
      when: "2025",
      title: "First CTF competition",
      text: "Solved beginner challenges in web and cryptography with a team.",
    }, */
    {
      when: "Next",
      title: "Internship and SOC analyst path",
      text: "Looking for hands-on experience in a security operations team.",
    },
  ],

  contact: {
    text: "I'm looking for internships, mentors, and study partners. Say hello.",
    // Buttons with an empty url are hidden automatically.
    links: [
      { label: "Email me", url: "mailto:AhmAb795@school.lu" },
      { label: "GitHub", url: "https://github.com/Aboloooo" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/abolfazle-ahmadi-7bb326440",
      },
    ],
  },
};
