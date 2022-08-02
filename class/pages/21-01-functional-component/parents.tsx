import ChildPage from "./child";

export default function ParentPage() {
  const qqq = {
    count: 200,
  };
  return (
    // <>
    //   <ChildPage count={100} />
    // </>
    <div>{ChildPage(qqq)}</div>
  );
}
// http://localhost:3000/21-01-functional-component/parents
