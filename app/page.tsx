"use client";

import { useState } from "react";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": any;
    }
  }
}

const pageSections = [
  {
    id: "about",
    title: "About Tech2Globe",
    content:
      "A simple staging site for the Tech2Globe AI assistant experience. Test the chatbot, review mock content, and validate the integration.",
  },
  {
    id: "features",
    title: "Staging Highlights",
    content:
      "This demo includes a clean header, sectioned content blocks, a footer, and the embedded chat widget for quick validation.",
  },
  {
    id: "contact",
    title: "Ready to Test?",
    content:
      "Use the chat launcher at the bottom right, then share feedback with the team to move the staging site toward production.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <img
              src="/tech2globe.png"
              alt="Tech2Globe logo"
              className="block h-10 w-auto"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-sky-600">
                Tech2Globe Staging
              </p>
              <h1 className="text-3xl font-bold">Tech2Globe AI Assistant</h1>
            </div>
          </div>
          <nav className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 md:mt-0">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-sky-500 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
              Staging Preview
            </span>
            <h2 className="mt-6 text-4xl font-bold">
              Build and test the AI experience for Tech2Globe
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              This staging page presents a quick review surface for the chatbot integration, content layout, and user flow before launch.
            </p>
          </div>
        </section>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pageSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="rounded-3xl bg-white p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-4 text-slate-600">{section.content}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tech2Globe. Staging site for demo and review.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <div className="h-full bg-slate-950">
        {
          // @ts-ignore
          <elevenlabs-convai agent-id="agent_5701kp5vz7hcft6vtye5awr118cg" />
        }
      </div>

      <script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        type="text/javascript"
      ></script>
    </div>
  );
}