export const CodeActionButton = ({ type, onClick }) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'DO_FIRST':
        return 'bg-green-100 text-green-500 hover:bg-green-200';
      case 'DO_LATER':
        return 'bg-[#d2e8ec] text-[#0296a6] hover:bg-blue-200';
      case 'DELEGATE':
        return 'bg-[#fdf1d3] text-yellow-500 hover:bg-yellow-200';
      case 'ELIMINATE':
        return 'bg-red-100 text-red-800 hover:bg-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${getButtonStyle()}`}
    >
      <div className="flex items-center gap-2">
        {type.replace('_', ' ')}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
      </div>
    </button>
  );
};