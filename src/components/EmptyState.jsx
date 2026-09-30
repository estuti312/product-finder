function EmptyState({ icon, title, message, children }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
      <div className="text-5xl">{icon}</div>
      <h2 className="mt-4 text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-slate-500">{message}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

export default EmptyState;
