import React from "react";

const features = [
  {
    title: "Redis Caching",
    description:
      "Optimized API response time from 2 minutes to under 5 seconds by caching frequently accessed data.",
  },
  {
    title: "Uptime Monitoring with UptimeRobot",
    description:
      "Integrated UptimeRobot for 24/7 monitoring and real-time alerts to ensure high availability.",
  },
  {
    title: "Express.js Backend",
    description:
      "Designed a lightweight backend using Express.js for fast, RESTful API communication.",
  },
//   {
//     title: "SEO-Ready Architecture",
//     description:
//       "Enhanced discoverability with proper metadata, structured content, and SEO best practices.",
//   },
  {
    title: "Mobile-First Design",
    description:
      "Built with responsiveness in mind, offering an optimal experience on all screen sizes.",
  },
//   {
//     title: "Secure API Access",
//     description:
//       "Implemented rate limiting and input validation to secure the backend from common vulnerabilities.",
//   },
//   {
//     title: "Real-Time Analytics",
//     description:
//       "Integrated analytics to track visitor engagement and interaction patterns.",
//   },
];

const UniqueFeatures = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#1e1b3a] to-[#2d1d48] text-white rounded-xl shadow-2xl my-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          🛠️ Unique Features of This Portfolio
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 border border-purple-600/30 backdrop-blur-md rounded-2xl p-6 transition-all hover:shadow-purple-700/40 hover:scale-[1.01]"
            >
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✅</span>
                <div>
                  <h3 className="text-xl font-semibold text-purple-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-purple-200 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueFeatures;
