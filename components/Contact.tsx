const Contact = () => {
  const inputs = [
    'Country',
    'Business activity',
    'Company name',
    "Contact person's name",
  ];
  const inputBaseStyle = () =>
    'w-full px-4 py-2 text-base text-gray-700  bg-white border border-transparent border-gray-700 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent';
  return (
    <div className="flex flex-col gap-4 p-2 md:mt-6 md:gap-1 md:flex-row">
      {inputs.map((input, i) => (
        <div className="relative " key={i}>
          <input
            type="text"
            id="rounded-email"
            className={`${inputBaseStyle()} `}
            placeholder={input}
          />
        </div>
      ))}

      <button
        type="button"
        className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md bg-accent focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        Search
      </button>
    </div>
  );
};

export default Contact;
