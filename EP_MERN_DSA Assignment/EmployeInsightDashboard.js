const employees = [
  {
    id: 1,
    name: "Alice",
    dept: "HR",
    joined: 2021,
    salary: 40000,
    active: true,
  },
  {
    id: 2,
    name: "Bob",
    dept: "Tech",
    joined: 2020,
    salary: 75000,
    active: true,
  },
  {
    id: 3,
    name: "Charlie",
    dept: "Finance",
    joined: 2018,
    salary: 62000,
    active: true,
  },
  {
    id: 4,
    name: "David",
    dept: "Tech",
    joined: 2022,
    salary: 80000,
    active: true,
  },
  {
    id: 5,
    name: "Eve",
    dept: "Finance",
    joined: 2021,
    salary: 68000,
    active: false,
  },
  {
    id: 6,
    name: "Frank",
    dept: "HR",
    joined: 2023,
    salary: 42000,
    active: true,
  },
  {
    id: 7,
    name: "Grace",
    dept: "Tech",
    joined: 2023,
    salary: 95000,
    active: true,
  },
];

const filtered = employees.filter((e) => e.joined > 2019 && e.active);

const deptSalaries = {};

filtered.forEach((e) => {
  if (!deptSalaries[e.dept]) {
    deptSalaries[e.dept] = { total: 0, count: 0 };
  }
  deptSalaries[e.dept].total += e.salary;
  deptSalaries[e.dept].count += 1;
});

const avgSalaries = Object.entries(deptSalaries).map(([dept, data]) => ({
  dept,
  avg: data.total / data.count,
}));

avgSalaries.sort((a, b) => b.avg - a.avg);

const top3Depts = avgSalaries.slice(0, 3).map((d) => d.dept);

console.log("Top 3 departments by average salary:", top3Depts);
