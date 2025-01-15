import React, { useEffect, useState } from 'react';
import { inspirationData } from '../../apis/inspirstion';

const Gallery = ({ currentIndex }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await inspirationData();
                console.log('Fetched data:', data); // Log dữ liệu trả về
                setData(data);
            } catch (err) {
                console.error('Error fetching inspiration data:', err);
                setError(err.message || 'Something went wrong');
            }
        };
        getData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const validIndex = currentIndex ?? 0;

    return (
        <div className="relative flex flex-row mr-3 overflow-hidden w-full h-[230px] rounded-md">
            <div
                className="flex w-[320px] h-full transition-transform duration-300"
                style={{
                    transform: `translateX(-${validIndex * 100}%)`,
                }}
            >
                {data.map((item, index) => (
                    <div
                        key={item.id || index}
                        className="flex-shrink-0 w-full mr-4 rounded-md"
                        style={{ width: '100%' }}
                    >
                        {item.url.includes('youtube.com') || item.url.includes('youtu.be') ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${item.url.split('/').pop().split('?')[0]}`}
                                title={`YouTube video ${index + 1}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-md"
                            />
                        ) : item.thumbnail ? (
                            <img
                                src={item.thumbnail}
                                alt={`Thumbnail for item ${index + 1}`}
                                className="object-cover w-full h-full bg-cover rounded-md"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 rounded-md">
                                No thumbnail available
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
