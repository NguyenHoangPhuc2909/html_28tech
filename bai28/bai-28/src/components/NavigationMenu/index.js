function NavigationMenu() {

    const handleClick = (e) => {
        console.log(e.target);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleFocus = (e) => {
        e.target.classList.add("input--active");
        console.log(e.target);
    }

    const handleBlur = (e) => {
        e.target.classList.remove("input--active");
        console.log(e.target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
    }

    return (
        <>
            <div className="Box">
                <div>NavigationMenu</div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}></input>
                    <button onClick={handleClick}>Click Here</button>
                </form>
            </div>
        </>
    )
}

export default NavigationMenu;