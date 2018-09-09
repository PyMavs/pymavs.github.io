const eventCard = []
for(let i = 0; i < events.length; i++){
    const listPlans = events[i][4].map((plan) =>
        <li className="string">"{plan}",</li>
    )
    eventCard.push(
        <div>
            <div className="card">
                <div className="card-body">
                    <span className="def">def</span> <span className="defname">{events[i][0]}</span>(<span className="arg">{events[i][1]}</span>):<br/>
                    <div className="codebody">
                        <span className="comment"><i>"""{events[i][3]}"""</i></span><br/>
                        <span className="var">Location</span> = <span className="string">"{events[i][2]}"</span><br/>
                        {/* <span className="var">About</span> = <span className="string">""</span><br/> */}
                        <span className="var">Agenda</span> = {'['}<br/>
                        <div className="codebody">{listPlans}</div>
                        {']'}
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
} 

ReactDOM.render(
    eventCard,
    document.getElementById("events")
)


const blogCard = []
for (let i = 0; i < blogs.length; i++){
    blogCard.push(
        <div>
            <div className="card">
                <div className="card-header head">
                    {blogs[i][0]} - {blogs[i][1]}
                </div>

                <div className="card-body">
                {blogs[i][2]}
                </div>
            </div>
            <br/>
        </div>
    )
}

ReactDOM.render(
    blogCard,
    document.getElementById("blog")
)

const vidCard = []
for(let i = 0; i < videos.length; i++) {
    vidCard.push(
        <div>
            <div className="card">
                <div className="card-header head">
                    {videos[i][0]} - {videos[i][1]}
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7">{videos[i][2]}</div>
                        <div className="col-lg-5">{videos[i][3]}</div>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

ReactDOM.render(
    vidCard,
    document.getElementById("pyone")
)