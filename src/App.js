import React, { useEffect, useState } from 'react';

import { fetchData } from '../src/services/api';

import NavigationView from "../src/components/NavigationView/NavigationView";
import ToolbarView from "../src/components/ToolbarView/ToolbarView";
import TaskDashboardView from "../src/components/TaskDashboardView/TaskDashboardView";
import AccordionView from "../src/components/AccordionView/AccordionView";
import TabbedView from "../src/components/TabbedView/TabbedView";

import headerImgHolder from '../src/assets/images/asp__heacder-image.jpg';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const tabs = [
    {
      "id": 1,
      "title": "Information 1",
      "content": "Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean. Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean."
    },
    {
      "id": 2,
      "title": "Information 2",
      "content": "Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean. Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean."
    },
    {
      "id": 3,
      "title": "Information 3",
      "content": "Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean. Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. Imperdiet vel non leo lacus sit duis orci aenean."
    }
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="asp__app">
     <header className="asp__header">
       <img src={headerImgHolder} alt="" className="asp__header-img"></img>
     </header>
     <aside className="asp__sidebar">
       <NavigationView />
     </aside>
      <main className="asp__main-container">
        <ToolbarView />
        <div class="asp__main-panel">
          <section className="asp__section">
            <h2 className="asp__section-title">Welcome to the new E-Zone</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Justo a dictum gravida lectus lacus morbi a. Id diam facilisi aliquet tellus. Morbi ut auctor bibendum amet massa tellus varius. Tristique dui tellus turpis sit turpis ut. </p>
          </section>
          <section className="asp__section">
            <h2 className="asp__section-title"><span></span>Upcoming tasks</h2>
            <TaskDashboardView />
          </section>
          <section className="asp__section">
            <h2 className="asp__section-title">FAQS</h2>
            <AccordionView items={items} />
          </section>
          <section className="asp__section">
            <h2 class="asp__section-title">More information</h2>
            <TabbedView tabs={tabs} />
          </section>
        </div>
        <div className="asp__side-panel">
          
            <section className="asp__section">
              <h2 class="asp__section-title">Exhibitor Details</h2>
              <p><strong>Company</strong> Shell scheme exhibitor</p>
              <p><strong>Stand number</strong> A07</p>
              <p><strong>Group</strong> Standard</p>
              <a href="" className="">Download PDF</a>
            </section>
        </div>
      </main>
      
    </div>
  );
};

export default App;