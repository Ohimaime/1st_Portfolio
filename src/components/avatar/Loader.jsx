export default function Loader() {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
          <div className="w-48 h-48 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse border border-blue-400/30">
            <div className="text-4xl text-blue-400">🚀</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full animate-ping"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400 text-sm animate-pulse">
            Loading Avatar...
          </div>
        </div>
      </div>
    );
  }