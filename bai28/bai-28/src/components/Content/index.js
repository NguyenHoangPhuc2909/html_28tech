function Content(props) {
    const { text, number, active } = props;
    console.log(props);
    console.log(props.text);
    return (
        <>
            <div className={"Box " + (active ? "Box--active" : "")}>{text} - {number}</div>
            {/* <div className="Box Box--active">{props.text} - {props.number}</div> */}
        </>
    )
}

export default Content;