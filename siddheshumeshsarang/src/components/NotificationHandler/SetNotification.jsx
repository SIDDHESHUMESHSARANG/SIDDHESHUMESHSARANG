import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SetNotification = ({ Purpose, title, link }) => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const formattedDate = `${dd}/${mm}/${yyyy}`;
        setCurrentDate(formattedDate);
    }, []);

    return (
        <>
            <hr style={{
                borderTop: "1px dotted"
            }} />
            <Link to={link}>
                <div className="text-[12px] md:text-[15px] md:justify-center flex m-2 gap-8 p-5 overflow-y-auto">
                    <p>{Purpose}&nbsp;</p>
                    <p>{title}</p>
                    <p>Date: {currentDate}</p>
                </div>
            </Link>
        </>
    );
};

export default SetNotification;
