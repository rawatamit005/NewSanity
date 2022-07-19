import React from 'react';
import FeaturedBlog from '../components/homepage/FeaturedBlog';
import HeroSection from '../components/homepage/HeroSection';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO />
    <HeroSection />
    <div className="container">
      <FeaturedBlog />
    </div>
  </>
);

export default IndexPage;
