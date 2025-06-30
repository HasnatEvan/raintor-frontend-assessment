'use client';

const WorkProcessSection = () => {
  return (
    <section className="bg-[#111111] text-white py-16 px-4 sm:px-6 md:px-10 rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Top Tag Button */}
      {/* Header */}
<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
  <button className="border border-white rounded-full px-4 py-1 text-sm flex items-center gap-2 w-max mb-4 sm:mb-0">
    <span className="text-xl">↓</span> Work Process
  </button>
</div>

{/* Centered Heading only */}
<h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 mx-auto">
  My Work Process
</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Discovery',
              desc: `We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.`,
            },
            {
              title: 'Strategy',
              desc: `Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews, we're here to set the stage for success.`,
            },
            {
              title: 'Design',
              desc: `After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.`,
            },
            {
              title: 'Build',
              desc: `Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.`,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-black rounded-2xl p-6 sm:p-8 flex flex-col justify-between transform transition duration-300 ease-in-out hover:-rotate-1 hover:bg-[#C5FF41] hover:text-black"
            >
              <div>
                <span className="bg-[#b2fce4] text-black font-semibold px-4 py-1 rounded-full inline-block mb-4 text-sm sm:text-base">
                  {item.title}
                </span>
                <p className="text-sm sm:text-base text-inherit leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 text-right text-sm underline flex justify-end items-center gap-1">
                → <span>Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
