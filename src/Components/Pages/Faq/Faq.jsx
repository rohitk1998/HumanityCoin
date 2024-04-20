import React from "react";
import { Collapse } from "antd";
import swapicon from "../../Assets/Images/horse-back.png";
import "./faq.scss";
import uparrow from "../../Assets/Images/uparrows.svg";
import discord from "../../Assets/Images/discord-icon.svg";
function Faq() {
  const { Panel } = Collapse;
  return (
    <div className="question">
      <div className="faqContainer">
        <h3>Frequently Asked Questions</h3>
        <div className="questioInner">
          <div className="faqleft">
            <Collapse accordion>
              <Panel header="What is Humanity Protocol?" key="1">
                <p>
                  The Humanity Protocol is an open-source protocol for providing
                  liquidity and trading ERC20 tokens on Ethereum. It eliminates
                  trusted intermediaries and unnecessary forms of rent
                  extraction, allowing for safe, accessible, and efficient
                  exchange activity. The protocol is non-upgradable and designed
                  to be censorship resistant.
                </p>
                <p>
                  The Humanity Protocol and the Humanity Interface were developed
                  by Humanity Labs.
                </p>
                <p>
                  Check out the <span>Introduction</span> section of our docs
                  for more info on the different roles played by Labs, the
                  Interface, and the Protocol.
                </p>
              </Panel>
              <Panel header="How do I use the Humanity Protocol?" key="2">
                <p>
                  To create a new liquidity pool, provide liquidity, swap
                  tokens, or vote on governance proposals, head over to the{" "}
                  <span>Humanity</span>
                  Interface and connect a Web3 wallet. Remember, each
                  transaction on Ethereum costs Ether (ETH). For a more detailed
                  walkthrough, check out our <span>Help Guides.</span>
                </p>
                <p>
                  If you’re a developer interested in building on top of the
                  Humanity Protocol, please refer to our extensive{" "}
                  <span>docs.</span>
                </p>
              </Panel>
              <Panel header="How does Humanity Protocol work?" key="3">
                <p>
                  Humanity is an automated market maker. In practical terms, it
                  is a collection of smart contracts that define a standard way
                  to create liquidity pools, provide liquidity, and swap assets.
                </p>
                <p>
                  Each liquidity pool contains two assets. The pools keep track
                  of aggregate liquidity reserves and the pre-defined pricing
                  strategies set by liquidity providers. Reserves and prices are
                  updated automatically every time someone trades. There is no
                  central order book, no third-party custody, and no private
                  order matching engine.
                </p>
                <p>
                  Because reserves are automatically rebalanced after each
                  trade, a Humanity pool can always be used to buy or sell a
                  token — unlike traditional exchanges, traders do not need to
                  match with individual counterparties to complete a trade.
                </p>
                <p>
                  For a more in-depth description, check out the{" "}
                  <span>Concepts</span> from the documentation.
                </p>
              </Panel>
            </Collapse>
          </div>
          <div className="faqright">
            <div className="faqRightInner">
              <h4>
                <img
                  src={discord}
                  alt="discord"
                  width={24}
                  className="uniImg"
                />
                Discord
              </h4>
              <img src={uparrow} alt="imgs" className="upwardArrow"/>
            </div>
            <div className="faqRightInner">
              <h4>
                <img
                  src={swapicon}
                  alt="Humanity"
                  width={30}
                  height={30}
                  className="uniImg"
                />
                Help Center
              </h4>
              <img src={uparrow} alt="imgs" className="upwardArrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;