import { FaChartLine, FaUsers, FaLayerGroup, FaPalette, FaUserShield, FaLock } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaChartLine size={22} />,
      title: "Powerful analytics",
      desc: "Track engagement and understand your audience with clear insights."
    },
    {
      icon: <FaUsers size={22} />,
      title: "Community discussions",
      desc: "Create meaningful conversations and grow active communities."
    },
    {
      icon: <FaLayerGroup size={22} />,
      title: "Content management",
      desc: "Organize posts, media, and events in one place easily."
    },
    {
      icon: <FaPalette size={22} />,
      title: "Custom branding",
      desc: "Personalize your platform with your own logo and colors."
    },
    {
      icon: <FaUserShield size={22} />,
      title: "Member roles",
      desc: "Control access with flexible permissions and roles."
    },
    {
      icon: <FaLock size={22} />,
      title: "Secure platform",
      desc: "Enterprise-level security to protect your community data."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          All the tools you need
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to build, grow and manage your online community.
        </p>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-600 rounded-xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;