import { useEffect, useState } from "react";

const useMenu = () => {
    const [loading, setLoading] = useState(true);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_SAVORY_SERVER}/api/menu`
                );
                const data = await res.json();
                // console.log(data);
                setMenu(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        getData();
    }, []);

    return [loading, menu];
};

export default useMenu;
