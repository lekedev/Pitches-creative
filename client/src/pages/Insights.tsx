import InsightsHero from '../components/Insights/InsightsHero'
import FeaturedInsights from '../components/Insights/FeaturedInsights';
import LatestInsights from '../components/Insights/LatestInsights';
import NewsletterSignup from '../components/Insights/NewsletterSignup';

function Insights() {
  return (
    <div>
      <InsightsHero />
      <FeaturedInsights />
      <LatestInsights />
      <NewsletterSignup />
    </div>
  );
}

export default Insights;