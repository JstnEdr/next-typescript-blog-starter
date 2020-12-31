interface IProps {}

export default function H1(props: IProps) {
  return (
    <>
      <h1 {...props} />
      {/* <div className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        EXTRA
      </div>
      <style jsx>{`
        h1 {
          color: tomato;
          font-size: 20px;
        }
      `}</style> */}
    </>
  );
}
