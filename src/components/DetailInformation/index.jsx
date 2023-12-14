import React, { useState } from "react";
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.props.label === activeTab) {
          return child.props.children;
        }
        return null;
      })}
      <TabButtons
        buttons={children}
        activeTab={activeTab}
        changeTab={changeTab}
      />
    </div>
  );
};

const TabButtons = ({ buttons, activeTab, changeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((child) => (
        <button
          key={child.props.label}
          className={child.props.label === activeTab ? "activeTab" : ""}
          onClick={() => changeTab(child.props.label)}
        >
          {child.props.label}
        </button>
      ))}
    </div>
  );
};

const Tab = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

function DetailInformation() {
  return (
    <div className="tabs-container">
      <h1>React Tabs</h1>
      <Tabs>
        <Tab label="Tab 1">
          <p>
            1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquid soluta perspiciatis consequuntur quas, facilis quidem non
            nihil numquam iure, laudantium sapiente sed facere debitis, corporis
            vero odio aspernatur recusandae est quia neque assumenda cumque eum
            repellendus. Voluptas id corporis ut voluptate recusandae quae minus
            dolore quia! Iste nobis possimus repudiandae, corrupti minima culpa
            facilis iure recusandae ipsa aliquid eveniet beatae reiciendis velit
            nulla odit blanditiis. Eaque nulla labore vel eligendi magnam,
            debitis odio hic eos in at quas cum neque sequi! Et eveniet harum
            quae dolore quidem maxime placeat, vel quaerat, inventore explicabo,
            mollitia quam non quod quos! Nemo.
          </p>
        </Tab>
        <Tab label="Tab 2">
          <p>
            2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquid soluta perspiciatis consequuntur quas, facilis quidem non
            nihil numquam iure, laudantium sapiente sed facere debitis, corporis
            vero odio aspernatur recusandae est quia neque assumenda cumque eum
            repellendus. Voluptas id corporis ut voluptate recusandae quae minus
            dolore quia! Iste nobis possimus repudiandae, corrupti minima culpa
            facilis iure recusandae ipsa aliquid eveniet beatae reiciendis velit
            nulla odit blanditiis. Eaque nulla labore vel eligendi magnam,
            debitis odio hic eos in at quas cum neque sequi! Et eveniet harum
            quae dolore quidem maxime placeat, vel quaerat, inventore explicabo,
            mollitia quam non quod quos! Nemo.
          </p>
        </Tab>
        <Tab label="Tab 3">
          <p>
            3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            aliquid soluta perspiciatis consequuntur quas, facilis quidem non
            nihil numquam iure, laudantium sapiente sed facere debitis, corporis
            vero odio aspernatur recusandae est quia neque assumenda cumque eum
            repellendus. Voluptas id corporis ut voluptate recusandae quae minus
            dolore quia! Iste nobis possimus repudiandae, corrupti minima culpa
            facilis iure recusandae ipsa aliquid eveniet beatae reiciendis velit
            nulla odit blanditiis. Eaque nulla labore vel eligendi magnam,
            debitis odio hic eos in at quas cum neque sequi! Et eveniet harum
            quae dolore quidem maxime placeat, vel quaerat, inventore explicabo,
            mollitia quam non quod quos! Nemo.
          </p>
        </Tab>
      </Tabs>
    </div>
  );
}

export default DetailInformation;