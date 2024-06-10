import React from "react";
import { Collapse } from "antd";
import swapicon from "../../Assets/Images/horse-back.png";
import "./faq.scss";
import uparrow from "../../Assets/Images/uparrows.svg";
import discord from "../../Assets/Images/discord-icon.svg";
import { FAQ } from "../../../utils/constant";
//change
function Faq() {
  const { Panel } = Collapse;
  //change
  return (
    <div className="question">
      <div className="faqContainer">
        <h2>FAQs</h2>
        <p>FAQ for the Humanity Token Projecti</p>
        <div className="questioInner">
          <div className="faqleft">
            <Collapse accordion>
              {
                FAQ.map((item, index)=> {
                  return(
                    <Panel header={item.question} key={item.id}>
                <span>
                 {item.answer}
                </span>
              </Panel>
                  )
                })
              }
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
