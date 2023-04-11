import  ProgressBar  from "./ProgressBar";
const GroupProgressBar = (props) => {
  const { data, height } = props;

  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: 28,
    height: `${height}px`
  }

  return (
    <div style={containerStyles}>
      {data.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
    ))}
    </div>
  );
};

export default GroupProgressBar;