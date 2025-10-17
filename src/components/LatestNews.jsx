function LatestNews() {
  const newsItems = [
    {
      image: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'AI Technology Advances in Fact-Checking Systems',
      link: '#',
      source: 'Tech News',
      category: 'Technology'
    },
    {
      image: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Digital Literacy Programs Expand to More Schools',
      link: '#',
      source: 'Education Today',
      category: 'Education'
    },
    {
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Social Media Platforms Implement New Verification Tools',
      link: '#',
      source: 'Digital Trends',
      category: 'Social Media'
    },
    {
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Youth-Led Initiative Combats Online Misinformation',
      link: '#',
      source: 'Youth Voice',
      category: 'Community'
    },
    {
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'New Study Reveals Impact of Fake News on Teenagers',
      link: '#',
      source: 'Research Weekly',
      category: 'Research'
    },
    {
      image: 'https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Browser Extensions Help Users Spot Misinformation',
      link: '#',
      source: 'Tech Review',
      category: 'Technology'
    },
  ]

  return (
    <section className="news-section" id="news">
      <div className="section-divider"></div>

      <div className="news-header">
        <h2>LATEST NEWS</h2>
      </div>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <a href={item.link} className="news-title">
                {item.title}
              </a>
              <div className="news-meta">
                <span className="news-source">{item.source}</span>
                <span className="news-category">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestNews
