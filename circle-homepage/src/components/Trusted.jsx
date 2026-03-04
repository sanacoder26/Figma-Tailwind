function Trusted() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <p className="text-gray-500 text-sm mb-8">
          Trusted by 100,000+ customers worldwide
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-70">
          <img src="/logos/google.png" alt="Google" className="mx-auto h-6" />
          <img src="/logos/slack.png" alt="Slack" className="mx-auto h-6" />
          <img src="/logos/atlassian.png" alt="Atlassian" className="mx-auto h-6" />
          <img src="/logos/dropbox.png" alt="Dropbox" className="mx-auto h-6" />
          <img src="/logos/shopify.png" alt="Shopify" className="mx-auto h-6" />
        </div>

      </div>
    </section>
  );
}

export default Trusted;