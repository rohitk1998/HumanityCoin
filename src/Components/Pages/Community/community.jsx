import React from 'react';
import style from './community.scss';
import { Button } from 'antd';
import unicode from '../../Assets/Images/unicode.png';
import horse from '../../Assets/Images/horse-back.png';
import uparrow from '../../Assets/Images/uparrows.svg';
import twitter from '../../Assets/Images/twitter.svg';
import unisox from '../../Assets/Images/unisocks.png';
import lockup from '../../Assets/Images/lockup.svg';
import bgAsset from '../../Assets/Images/bg-asset.svg';

function Community() {
  const data = [
    {
      head: 'discord',
      text: 'Ask questions and engage with the Uniswap Community',
      headuni: 'Humanity Labs',
      textuni: 'Follow the latest news from Humanity Labs',
    },
    {
      head: 'Governance Forum',
      text: 'Share ideas and participate in Uniswap in Governance',
      headuni: 'Uniswap Grants Program',
      textuni: 'Learn about recent grants recepients and program updates',
    },
    {
      head: 'Reddit',
      text: 'Contribute to wide-ranging Uniswap discussions',
      headuni: 'Defi Education Fund',
      textuni:
        'Stay up to date with announcements from the Defi Education Fund',
    },
  ];
  const unicodeData = [
    {
      id: 1,
      imageSource: unicode,
      title: 'Unicode',
      description: 'A virtual hackathon focused on the Uniswap Protocol.',
      link: 'https://example.com',
    },
    {
      id: 2,
      imageSource: horse,
      title: 'Unicode',
      description: 'A virtual hackathon focused on the Uniswap Protocol.',
      link: 'https://example.com',
    },
    {
      id: 3,
      imageSource: unisox,
      title: 'Unicode',
      description: 'A virtual hackathon focused on the Uniswap Protocol.',
      link: 'https://example.com',
    },
  ];
  const brnadAsset = [
    {
      id: 1,
      imageSource: lockup,
      title: 'Unicode',
      description: 'A virtual hackathon focused on the Uniswap Protocol.',
    },
    {
      id: 2,
      imageSource: bgAsset,
      title: 'Unicode',
      description: 'A virtual hackathon focused on the Uniswap Protocol.',
    },
  ];
  return (
    <div className="community">
      <div className="communitySec">
        <div className="container">
          <p className="communityText">COMMUNITY</p>
          <h3>
            <span>The Humanity community is an ecosystem of </span>
            users, developers, designers, and educators
          </h3>
          <div className="joinConversation">
            <p className="join">Join the conversation.</p>
            <p className="subtitle">
            Humanity global and vibrant community drives the success of the
              Protocol. Join the conversation on Discord, Twitter, and Reddit to
              stay up to date on the latest community news.
            </p>
          </div>
          <div className="discordTop">
          {data.map((item, index) => (
            <div key={index} className="discords">
              <div className="left">
                <div className="leftTop">
                  <h4>
                    <img src={twitter} alt="Twitter" />
                    {item.head}
                  </h4>
                  <img src={uparrow} alt="Up Arrow" />
                </div>
                <p>{item.text}</p>
              </div>
              <div className="right">
                <div className="leftTop">
                  <h4>
                    <img src={twitter} alt="Twitter" />
                    {item.headuni}
                  </h4>
                  <img src={uparrow} alt="Up Arrow" />
                </div>
                <p>{item.textuni}</p>
              </div>
            </div>
          ))}
        </div>
          <div className="uniMember">
          <h4>
          Humanity community members contribute and express themselves through
            mediums <span>beyond</span> finance
          </h4>
          <p>We believe that serious play can lead to serious things. </p>
          <div className="UniswapCommunity">
            {unicodeData.map((data) => (
              <div key={data.id} className="first">
                <img
                  src={data.imageSource}
                  alt="unicode"
                  className="unicodeimg"
                />
                <div className="unicode">
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                  <a href={data.link}>See More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
          <div className="brandAssets">
          <h4>Brand assets</h4>
          <p>Download the logo and other brand assets here.</p>
          <div className="inner">
            {brnadAsset.map((data) => (
              <div key={data.id} className="first">
                <img
                  src={data.imageSource}
                  alt="unicode"
                  className="unicodeimg"
                />
                <div className="unicode">
                  <h4>{data.title}</h4>
                  <p>{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
