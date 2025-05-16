export default function Button({
                                 children,
                                 ...props
                               }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
      <button
          {...props}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition font-medium"
      >
        {children}
      </button>
  );
}
