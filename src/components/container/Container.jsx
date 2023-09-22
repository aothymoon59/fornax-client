const Container = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto px-2 sm:px-3 md:px-[60px]">
            {children}
        </div>
    );
};

export default Container;