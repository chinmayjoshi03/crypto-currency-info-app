import React from 'react';
import { Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'; 

const { Title, Text } = Typography;

const News = ({ simplified }) => {
  const newsCategory = 'Cryptocurrency'; 
  const count = simplified ? 10 : 100; 
  const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({ newsCategory, count }); 

  
  if (isFetching) return <div>Loading...</div>;

  
  if (error) return <div>Error fetching news</div>;

  
  if (!cryptoNews || !cryptoNews.articles) return <div>No news available</div>;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.articles.map((article, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card hoverable className="news-card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{article.title || 'No Title'}</Title>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/150'} 
                  alt={article.title || 'News Image'}
                  style={{ maxHeight: '100px', maxWidth: '150px', objectFit: 'cover' }}
                />
              </div>
              <p>
                {(article.description && article.description.length > 100)
                  ? `${article.description.substring(0, 100)}...`
                  : article.description || 'No description available'}
              </p>
              <div className="provider-container">
                <Avatar src={article.source?.name || 'https://via.placeholder.com/30'} />
                <Text className="provider-name">{article.source?.name || 'Unknown Source'}</Text>
                <Text>{article.publishedAt ? moment(article.publishedAt).fromNow() : 'Unknown time'}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
