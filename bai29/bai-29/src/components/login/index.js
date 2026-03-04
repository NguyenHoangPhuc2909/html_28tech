/*
function Login() {
    const isLogin = true;
    if (isLogin) {
        return (
            <>
                <div>Thông tin người dùng, nút Logout</div>
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    Nút đăng nhập, nút đăng ký
                </div>
            </>
        )
    }
}
*/


function Login() {
    const isLogin = true;

    return (
        <>
            {isLogin ? (<>
                <div>
                    Thông tin người dùng, nút Logout
                </div>
            </>) : (
                <>
                    <div>
                        Nút đăng nhập, nút đăng ký
                    </div>
                </>
            )}


            {isLogin && <div>Avatar</div>}
        </>
    )
}

export default Login;