import { RiShare2Line , RiMoreLine } from "react-icons/ri";

const Feed = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start">
            <div className="grid gap-4">
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p0.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p1.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p2.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p0.jpg')} />
                    <Overlay />
                </div>
            </div>
            <div className="grid gap-4">
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p3.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p4.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p5.jpg')} />
                    <Overlay />
                </div>
            </div>
            <div className="grid gap-4">
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p6.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p0.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p1.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p6.jpg')} />
                    <Overlay />
                </div>
            </div>
            <div className="grid gap-4">
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p2.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p3.jpg')} />
                    <Overlay />
                </div>
                <div className="bg-black rounded-xl group relative cursor-pointer ">
                    <img className="h-auto max-w-full rounded-xl group-hover:opacity-70" src={('../public/p4.jpg')} />
                    <Overlay />
                </div>
            </div>
        </div>
    );
};

const Overlay = () => (
    <div className="overlay opacity-0 absolute group-hover:opacity-100 group-hover:h-full top-0 left-0 w-full flex flex-col justify-between items-end">
        <div className="flex flex-row justify-end items-start">
            <a href="#" className="m-2 px-5 py-3 bg-red-500 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-500 text-white rounded-4xl transition-all">Save</a>
        </div>
        <div className='flex flex-row justify-end items-end'>
            <RiShare2Line className="feed-overlay-options" />
            <RiMoreLine className="feed-overlay-options" />
        </div>
    </div>
);

export default Feed;