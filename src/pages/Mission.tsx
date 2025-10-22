import { Users, Target, Shield } from 'lucide-react';

export default function Mission() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            JuliusAI is designed to serve federal agencies and mission-critical operations
            with cutting-edge AI capabilities while maintaining the highest standards of
            security, compliance, and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 hover:border-neutral-500 transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-neutral-700 rounded-full">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Users
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 hover:border-neutral-500 transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-neutral-700 rounded-full">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Impact
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-8 hover:border-neutral-500 transition-all duration-300 transform hover:scale-105">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-neutral-700 rounded-full">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Constraints
            </h2>
            <p className="text-neutral-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
