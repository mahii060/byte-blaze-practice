import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <CirclesWithBar
                height="100"
                width="100"
                color="#FF00FF"
                outerCircleColor="#FF00FF"
                innerCircleColor="#FF00FF"
                barColor="#FF00FF"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;