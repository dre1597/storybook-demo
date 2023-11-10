type Props = {
  /** color of the light */
  variant?: 'green' | 'yellow' | 'red',
}

/** Component for a light */
const Light = ({ variant = 'green' }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: '50%',
        width: 50,
        height: 50
      }}
    >
    </div>
  );
};

export default Light;
