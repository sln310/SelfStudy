function Skills() {
  return (
    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* left side */}
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./img/pc.jpg" alt="" className="rounded" />
        </div>
        {/* right side */}
        <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2 ">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left dark:text-white">
            My Skills
          </h1>
          <div>
            <h2 className="dark:text-white">HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leadong-none py-1 text-center text-white"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <h2 className="dark:text-white">CSS</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leadong-none py-1 text-center text-white"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
            <h2 className="dark:text-white">JavaScript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leadong-none py-1 text-center text-white"
                style={{ width: "5%" }}
              >
                5%
              </div>
            </div>
            <h2 className="dark:text-white">React</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leadong-none py-1 text-center text-white"
                style={{ width: "3%" }}
              >
                3%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
