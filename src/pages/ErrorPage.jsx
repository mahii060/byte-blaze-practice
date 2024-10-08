import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const { data, status } = error;
    console.log(error);
    return (
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-error">
                        {status}!
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">{data}</p>
                    <p className="mt-4 mb-8 text-gray-600">But do not worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/' className="btn btn-primary text-lg">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;