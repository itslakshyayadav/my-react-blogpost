function Blog() {
  return (
    <>
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
              alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
              className="h-full w-full object-cover object-center"
            />
          </div>
          <h3 className="mt-6 font-semibold text-gray-900">title :</h3>
          <p className="text-base font-semibold text-gray-900">description :</p>
          <button
            type="button"
            className=" my-5 border-2 rounded-xl	bg-sky-400	p-2 text-white"
          >
            Go Some Where
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
