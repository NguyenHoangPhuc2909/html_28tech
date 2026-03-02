import { FaAmazonPay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function MainContent() {
    let name = "Nguyen Hoang Phuc";
    const css = {
        // color: 'yellow',
        // backgroundColor: 'green'
    };

    return (
        <>
            <div className="Box">
                <div className='test' style={css}>
                    {/* style={{color: 'yellow', backgroundColor: 'green'}}: Có thể như này */}
                    Xin chao {name}!
                </div>
                <div className='test' style={css}>
                    {/* style={{color: 'yellow', backgroundColor: 'green'}}: Có thể như này */}
                    Xin chao {name}!
                </div>
            <FaAmazonPay style={{fontSize: "50px"}}/>
            <FaApple className="icon"/>
            </div>
        </>
    )
}

export default MainContent;