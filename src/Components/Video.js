export default function Video() {
    return (
        <div>

            <video className="video" autoPlay muted loop playsInline>
                <source src="Website video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}