import GalleryCard from "./GalleryCard";


const Gallery = () => {
    return (
        <div className="bg-teal-50">
            This is Gallery
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
                <GalleryCard></GalleryCard>
            </div>
        </div>
    );
};

export default Gallery;