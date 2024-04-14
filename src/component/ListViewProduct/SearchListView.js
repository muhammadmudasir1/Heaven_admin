import { useEffect, useState } from "react";
import Api from "../../api/Api";
import { Helmet } from "react-helmet";
import ListView from "./ListView";
import { useLocation } from "react-router-dom";

const SearchListView = () => {
    const [Cards, setCards] = useState([]);
    const [isLoader, setIsLoader] = useState(true);
    const location=useLocation()

    useEffect(() => {
        const fetchData = async (data) => {
            try {

                const response = await Api.post('/api/products/search', {
                    query: data

                });
                setCards(response.data);
                setIsLoader(false);
            } catch (error) {
                console.log(error);
            }
        };
        const Query = new URLSearchParams(location.search);
        let data = Query.get('query')
        fetchData(data);
    }, []);



    return (
        <>
            <Helmet>
                <title>3DHeaven | Search</title>
                <meta name='description' content='3dheaven bietet praxisnahe Testberichte über digitale Fertigungsmethoden. Druckertuning, aktuelle Hypes auf dem 3D-Druckermarkt' />
                <link rel="canonical" href="https://www.3dheaven.de/" />
            </Helmet>

            <ListView Cards={Cards} isLoading={isLoader} />
        </>

    );
};

export default SearchListView;
