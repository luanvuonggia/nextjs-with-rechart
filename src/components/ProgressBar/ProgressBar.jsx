const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const progressStyles = {
    height: '100%',
    width: 24,
    backgroundColor: "#EDF2F3",
    borderRadius: 11,
    position: 'relative',
  }

  const fillerStyles = {
    width: '100%',
    position: 'absolute',
    height: `${completed}%`,
    minHeight: 17,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    bottom: 0,
    animation: 'grow 0.8s ease-out forwards',
    transformOrigin: 'bottom',
  }

  const labelStyles = {
    color: bgcolor,
    fontWeight: 500,
    fontSize: 14,
  }

  return (
    <div>
      <div style={progressStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
      <span style={labelStyles}>{`${completed}%`}</span>
    </div>
  );
};

export default ProgressBar;