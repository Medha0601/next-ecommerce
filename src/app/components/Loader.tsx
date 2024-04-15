type LoaderSize =  {
    height: Number| String,
    width: Number|String
}
export default function Loader({height, width}: LoaderSize) {
    return (
        <div className="flex justify-center items-center h-screen">
  <div className={`animate-spin rounded-full h-${height} w-${width} border-t-2 border-b-2 border-white-900`}></div>
</div>

    )
}