import logo from "../imges/logo.png"


const LoginPage = () => {
    return (
        <div className=" w-screen h-screen bg-gradient flex justify-center items-center">
            <div className=" w-1/3 h-2/3 bg-white shadow-xl rounded-xl border-black border-[1px] flex flex-col items-center">
                <div className="flex items-center justify-center pt-8">
                    <img src={logo} className=" w-12"></img>
                    <h2 className=" text-2xl font-sans font-bold">3D Heaven</h2>
                </div>
                <h1 className=" text-5xl font-righteous text-customBlue mt-6 ">WELCOME!</h1>
                <form className="mt-6 flex flex-col items-center w-full">
                    <div className="w-3/4">
                    <label>Username/E-mail Address:</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full h-12 border border-gray-300 rounded-2xl bg-gray-200 px-3 mt-1 shadow-sm text-center"
                        placeholder="Enter Username or Email Address here"
                    />

                    </div>
                    <div className="w-3/4 mt-5">
                    <label>Password:</label>
                    <input
                        type="password"
                        id="pasword"
                        className="w-full h-12 border border-gray-300 rounded-2xl bg-gray-200 px-3 mt-1 shadow-sm text-center"
                        placeholder="Enter Password here"
                    />

                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginPage