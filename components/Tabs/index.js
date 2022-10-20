import { useState } from "react";

export default function Tabs() {
  const data = [
    {
      id: "panel-react",
      title: "React",
      text: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by <a href="https://about.facebook.com/">Meta</a> (formerly Facebook) and a community of individual developers and companies.',
    },
    {
      id: "panel-vue",
      title: "Vue",
      text: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page applications</a>. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    },
    {
      id: "panel-angular",
      title: "Angular",
      text: 'AngularJS is a discontinued free and open-source JavaScript-based web framework for developing single-page applications. It was maintained mainly by <a href="https://www.apple.com/">Google</a> and a community of individuals and corporations.',
    },
  ];

  const [activePanelId, setActivePanelId] = useState(data[0].id);

  const handleTablistClick = (id) => setActivePanelId(id);

  const handleChangeTabsByArrows = (direction) => {
    const activeIndex = data.findIndex(activePanelId);
    const nextIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;
    const limit = data.length - 1;

    console.log("***", activePanelId);
    if (nextIndex > limit) {
      setActivePanelId(data.id[0]);
    } else if (nextIndex < limit && !nextIndex < 0) {
      setActivePanelId(data.id[nextIndex]);
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleTablistClick(id);
    } else if (e.key === "ArrowRight") {
      handleChangeTabsByArrows("next");
    } else if (e.key === "ArrowLeft") {
      handleChangeTabsByArrows("prev");
    }
  };

  return (
    <div className="tabs">
      <ul className="tabs__list" role="tablist">
        {data.map(({ id, title }) => (
          <li
            key={id}
            id={id}
            role="tab"
            aria-controls={id}
            aria-selected={`${id === activePanelId}`}
            data-tabpanel-id={id}
            onClick={() => handleTablistClick(id)}
            onKeyDown={(e) => handleKeyPress(e, id)}
            tabIndex={id === activePanelId ? 0 : -1}
            className={`
              tabs__list-item
              ${id === activePanelId ? "tabs__list-item--active" : ""}
            `}
          >
            {title}
          </li>
        ))}
      </ul>

      <div className="tabs__panel-container" role="tabpanel">
        {data.map(({ id, text }) => (
          <div
            aria-labelledby={id}
            key={id}
            id={id}
            className={`
              tabs__panel
              ${id === activePanelId ? "tabs__panel--active" : ""}
            `}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        ))}
      </div>
      <p>
        Front-end web development is the development of the graphical user
        interface of a website, through the use of HTML, CSS, and JavaScript, so
        that users can view and interact with that website.
      </p>
      <p>
        There are several libraries and frameworks that help speed up the front
        end development. The most popular are React, Vue, and Angular.
      </p>
    </div>
  );
}
