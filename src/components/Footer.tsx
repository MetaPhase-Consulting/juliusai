import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a
            href="https://github.com/MetaPhase-Consulting/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-2 py-1"
            aria-label="View source code on GitHub"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            <span className="text-sm font-medium">Open Source</span>
          </a>

          <p className="text-sm text-neutral-400">
            Built by{' '}
            <a
              href="https://metaphase.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#F47A1F] rounded px-1"
              style={{ color: '#F47A1F' }}
            >
              MetaPhase
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
