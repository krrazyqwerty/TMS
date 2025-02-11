import { useState } from "react";
import "./styles/Insights.css";
import add from "../assets/icons/add.png";
import cross from "../assets/icons/cross.png";

const Insights = () => {
  const [activeItems, setActiveItems] = useState([]);

  const containerStyle = {
    color: "#f3f2f2",
    padding: "20px",
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: "90px 180px",
  };

  const titleStyle = {
    fontSize: "2em",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "1.2em",
    color: "#f3f2f2",
    marginBottom: "50px",
  };

  const insightItemStyle = (isActive) => ({
    border: "1px solid #f3f2f2",
    background:
      "radial-gradient(347.35% 186.37% at -25% -38.24%, rgba(241, 245, 16, 0.40) 0%, rgba(67, 68, 4, 0.54) 10.4%, rgba(22, 23, 1, 0.58) 44.88%, rgba(0, 0, 0, 0.80) 100%)",
    padding: "15px",
    marginBottom: "30px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.3s ease",
    textAlign: "left",
    color: isActive ? "#f3f510" : "#f3f2f2",
  });

  const plusIconStyle = {
    marginRight: "10px",
    fontSize: "1.5em",
  };

  const handleItemClick = (index) => {
    setActiveItems((prevActiveItems) =>
      prevActiveItems.includes(index)
        ? prevActiveItems.filter((item) => item !== index)
        : [...prevActiveItems, index]
    );
  };

  const items = [
    {
      title: "Create and Organize Tasks with Ease",
      content:
        "Start by creating tasks in just a few clicks. Whenever it is a personla to-do list or a team-wide project, SWIVT TMS helps you break tasks into smaller, manageable parts. Organize tasks into categories, assign proiorities and add relevant details, ensuring everything is clearly outlined from the start. ",
    },
    {
      title: "Collaborate and Communicate Seamlessly",
      content:
        "Teamwork is at the core of SWIVT. Assign tasks to team members, set deadlines, and share files or instructions directly within the platform. Say goodbye to scattered emails and endless follow-ups-collaboration happens in real time, so everyone stays in sync. Use built-in communication tools to leave comments, provide feedback, or discuss updates without switching apps",
    },
    {
      title: "Track Progress and Stay Updated",
      content:
        "Gain full visibility into your workflow with real-time progress tracking. Use intuitive dashboards, Gantt charts, and Kanban boards to monitor task statuses and project timelines. Receive automatic updates and reminders to keep you informed about deadlines, overdue tasks, and key milestones. With SWIVT TMS, staying on track has never been easier.",
    },
    {
      title: "Achieve Goals and Optimize Workflow",
      content:
        "With SWIVT TMS, achieving your goals is efficient and stress-free. Analyze performance through detailed reports and identify areas for improvement. The platform helps you optimize workflows, eliminate bottlenecks, and focus on what matters most-delivering results. Whether you are managing a personal project or leading a team, SWIVT TMS adapts to your needs to help you work smarter.",
    },
  ];

  return (
    <div style={containerStyle}>
      <h3>How It Works?</h3>
      <h2 style={titleStyle}>
        How does <span className="text-[#f3f510]">SWIVT TMS</span> work?
      </h2>
      <p style={subtitleStyle} className="text-[#f3f2f2]">
        Seamless Task Management In 4 Easy Ways.
      </p>
      {items.map((item, index) => (
        <div
          key={index}
          style={insightItemStyle(activeItems.includes(index))}
          onClick={() => handleItemClick(index)}>
          <span style={plusIconStyle}>
            <img src={activeItems.includes(index) ? cross : add} alt="icon" />
          </span>
          <div>
            {item.title}
            <div
              className={`expand-content ${
                activeItems.includes(index) ? "active" : ""
              }`}
              style={{ marginTop: "10px", color: "#f3f2f2" }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insights;
