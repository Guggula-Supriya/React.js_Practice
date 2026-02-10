import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
];

export default function MyGraph() {
  return (
    <div style={styles.card}>
      <BarChart width={400} height={260} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="sales" barSize={40}>
          <Cell fill="brown" />
          <Cell fill="orange" />
          <Cell fill="black" />
        </Bar>
      </BarChart>
    </div>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};
