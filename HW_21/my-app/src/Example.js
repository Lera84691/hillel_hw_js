// import './App.css';

function Example(props) {
  return (
    <div className="example">
        <button onClick={props.clickHandler}>{props.country}</button>
    </div>
  );
}

export default Example;
