import { Calendar, Zap, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About JuliusAI
          </h1>
          <p className="text-xl text-neutral-300 leading-relaxed">
            Born from innovation, built for impact.
          </p>
        </div>

        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 md:p-12 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-neutral-700 rounded-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                MetaPhase Hackathon 2025
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The theme — <strong className="text-white">Through The Wall</strong> — challenged teams to break through barriers, push boundaries, and deliver mission-critical solutions under pressure.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-700 rounded-full">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Radical Efficiency
            </h3>
            <p className="text-neutral-300 text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-700 rounded-full">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Accelerated Innovation
            </h3>
            <p className="text-neutral-300 text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-neutral-700 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Mission-Focused
            </h3>
            <p className="text-neutral-300 text-center text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Through The Wall
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The hackathon isn't just about building — it's about <strong className="text-white">breaking through</strong>, pushing past limitations, and proving what's possible when talented teams unite with a shared mission.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Through the wall</strong> means tackling the impossible, delivering excellence under constraint, and transforming ambition into reality.
          </p>
        </div>
      </div>
    </div>
  );
}
