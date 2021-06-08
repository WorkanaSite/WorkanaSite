import Models from 'src/components/Models';

const Top = ({models}) => {
  return (
    <div
      style={{
        display: 'flex',
        overflow: 'scroll',
        height: 200,
        justifyContent: 'center',
      }}>
      <Models models={models} />
    </div>
  );
};

export default Top;
