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
                        <i>"""{events[i][3]}"""</i><br/>
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