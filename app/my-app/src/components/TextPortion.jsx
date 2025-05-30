export const TextPortion = () => {
  return (
    <div className="p-4 text-sm">
      <h3 className="font-semibold text-white">Hamilton</h3>
      <p className="text-gray-400 text-xs mb-2">New York City, NY</p>
      <p className="text-gray-300 text-xs mb-4">
        First staged in 2011, the play is a satirical examination of the beliefs
        and practices of The Church of Jesus Christ of Latter-day Saints.
      </p>

      <div className="border-t border-gray-700 my-2"></div>

      <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
        <span className="inline-flex items-center gap-1">
          🎟 Get tickets starting at
        </span>
      </div>

      <div className="flex justify-between text-white font-semibold text-sm">
        <div>
          <p>$50</p>
          <p className="text-gray-400 text-xs">Member</p>
        </div>
        <div>
          <p>$100</p>
          <p className="text-gray-400 text-xs">Standard</p>
        </div>
      </div>
    </div>
  );
};
