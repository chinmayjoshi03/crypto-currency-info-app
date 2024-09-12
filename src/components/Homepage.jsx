import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useGetCryptoStatsQuery } from '../services/CryptoApi';  // Correct hook for stats
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const { Title } = Typography;

function Homepage() {
  const { data, isFetching } = useGetCryptoStatsQuery();  // Correct query hook

  if (isFetching) return <div>Loading...</div>;

  const globalStats = data?.data;

  console.log(data);

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.totalCoins} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={globalStats.totalMarkets} />
        </Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 - Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link> 
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>Show More</Link> 
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepage;
