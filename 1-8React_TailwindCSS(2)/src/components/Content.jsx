const Content = ({content}) => {
    return (
        <section className="w-1/2 h-auto p-[10px]">
            <img className="w-full rounded-[10px]" src={content.img} />
            <div className="flex flex-row gap-[10px] p-[10px]">
                <div>
                    <img className="w-[30px] ruonded-full " src={content.profile} />
                </div>
                <div>
                    <p className="font-semibold">{content.title}</p>
                    <p className="text-[0.9rm] text-[gray]">{content.creator}</p>
                </div>
            </div>
        </section>
    )
}

export default Content