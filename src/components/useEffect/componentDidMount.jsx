import { useEffect, useState } from "react";

function TimerExample() {
  const [time, setTime] = useState(5); // 1:30 = 90 seconds
  const [key, setKey] = useState(0);    // used to restart timer

  // show data after page load + start timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [key]); // runs again when restarted

  function restartTimer() {
    // behaves like "page load" again
    setTime(5);
    setKey((k) => k + 1);
  }

  // derive status (NO setState)
  let status;
  if (time === 90) status = "Timer Loaded (After Page Load)";
  else if (time === 0) status = "Time Out";
  else status = "Timer Running";

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>⏳ Timer Example</h2>

      {time > 0 ? (
        <h1>
          {minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </h1>
      ) : (
        <h1 style={{ color: "red" }}>Time Out</h1>
      )}

      <p><b>Status:</b> {status}</p>

      <button onClick={restartTimer} style={{ marginTop: "20px" }}>
        Restart Timer
      </button>
    </div>
  );
}

export default TimerExample;
