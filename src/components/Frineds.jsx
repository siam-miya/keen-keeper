
import useFrinedsHook from "../hooks/useFrinedsHook"
import Friend from "./Friend";
import FriendsContextProvider from "../context/FriendsContext";

const Frineds = () => {
    const { friends, loading } = useFrinedsHook();
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-2xl font-bold">Loading.....</h2>
            </div>
        );
    }
    return (
        <section className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-[#1a2b48] mb-8">Your Friends</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {friends?.map((friend, index) => <Friend key={index} friend={friend} />)}
                </div>
            </div>
        </section>
    );
}

export default Frineds;