export default function Video() {
    return (
        <div>

            <video className="video" controls>
                <source src="hans.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}