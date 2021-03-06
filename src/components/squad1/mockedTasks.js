const mockedTasks = [
  {
    id: 1,
    name: "Tarea 1",
    description: "Descripción Tarea 1",
    state: "InProgress",
    starting_date: new Date(2021, 5, 28),
    estimated_time: null,
  },
  {
    id: 2,
    name: "Tarea 2",
    description: "Descripción Tarea 2", //,Descripción Tarea 2, Descripción Tarea 2, Descripción Tarea 2",
    state: "InProgress",
    starting_date: new Date(2021, 5, 26),
    estimated_time: null,
  },
  {
    id: 3,
    name: "Tarea 3",
    description: "Descripción Tarea 3",
    state: "Paused",
    starting_date: new Date(2021, 5, 27),
    estimated_time: null,
  },
  {
    id: 4,
    name: "Tarea 4",
    description: "Descripción Tarea 4",
    state: "Created",
    starting_date: null,
    estimated_time: null,
  },
  {
    id: 5,
    name: "Tarea 5",
    description: "Descripción Tarea 5",
    state: "Completed",
    starting_date: null,
    estimated_time: null,
  },
];

export default mockedTasks;
