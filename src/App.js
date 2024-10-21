import React from 'react';
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

function App() {
  const data = [
    {
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2023, 1, 15, 10, 0),
    EndTime: new Date(2023, 1, 15, 12, 30),
  },
  {
    Id: 2,
    Subject: 'Germany',
    StartTime: new Date(2023, 1, 17, 12, 0),
    EndTime: new Date(2023, 1, 17, 13, 30),
  },
  {
    Id: 3,
    Subject: 'England',
    StartTime: new Date(2023, 1, 13, 9, 0),
    EndTime: new Date(2023, 1, 13, 11, 0),
  },
];

  const eventSettings = { dataSource: data }

  return (
    <div className="App">
     <ScheduleComponent height='550px' selectedDate={new Date(2023, 1, 15)} eventSettings={eventSettings}>
       <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
     </ScheduleComponent>
   </div>
  );
}

export default App;