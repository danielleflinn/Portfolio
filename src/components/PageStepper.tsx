import { Link } from 'react-router-dom';

interface PageStepperProps {
  previous?: {
    title: string;
    path: string;
  };
  next?: {
    title: string;
    path: string;
  };
}

export function PageStepper({ previous, next }: PageStepperProps) {
  return <nav className="w-full py-12 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-8">
        {previous ? (
          <Link to={previous.path} className="flex items-center gap-2 text-[#C3471D] hover:text-[#D94F23] transition-colors max-w-[200px] group">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 group-hover:text-gray-500">Back to</span>
              <span className="font-semibold">{previous.title}</span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
        {next ? (
          <Link to={next.path} className="flex items-center gap-2 text-[#C3471D] hover:text-[#D94F23] transition-colors group ml-auto max-w-[200px]">
            <div className="flex flex-col text-right">
              <span className="text-sm text-gray-600 group-hover:text-gray-500">Next up</span>
              <span className="font-semibold">{next.title}</span>
            </div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </nav>;
}

