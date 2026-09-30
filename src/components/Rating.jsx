function Rating({ value }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
      <span className="text-amber-500">★</span>
      {value.toFixed(1)}
    </span>
  );
}

export default Rating;
